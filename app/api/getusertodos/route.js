import ConnectionDB from "@/lib/dbConnect";
import User from '@/model/User';
import Todo from "@/model/Todo";
import { NextResponse } from 'next/server';

export async function POST(req) {
  await ConnectionDB();
  try {
    const { userId } = await req.json();
    const todos = await Todo.find({
      $or: [{ assigned_to: userId }, { creator: userId }],
    })
      .populate({
        path: 'assigned_to',
        select: 'firstname lastname email _id', // Select specific fields and exclude others (e.g., exclude the _id field)
      })
      .populate({
        path: 'creator',
        select: 'firstname lastname email _id',
      });


    if (todos) {
      return NextResponse.json(
        {
          message: 'Todo Added',
          success: true,
          todos,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Something Went Wrong Route',
        error,
      },
      { status: 500 }
    );
  }
}