import { NextResponse } from "next/server";
import ConnectionDB from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
import User from "@/model/User"; // Ensure correct path

export async function POST(req) {
  await ConnectionDB(); // Ensure database connection

  try {
    const { email, password } = await req.json(); // Extract JSON body safely

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "Email already exists." }, { status: 400 });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });

    await newUser.save();

    return NextResponse.json({ message: "User created successfully", user: newUser }, { status: 201 });
  } catch (error) {
    console.error("Error in user registration:", error);
    return NextResponse.json({ message: "Server error", error: error.message }, { status: 500 });
  }
}
