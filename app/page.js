'use client'

import Header from '@/components/Header';
import Todo from '@/components/Todo';
import { useSession, signOut } from 'next-auth/react';


export default function Home() {
  const { data: session, status } = useSession();
  console.log('Session', session);
  const userId = session?.user?._id;

  if (status === 'loading') return <p>Loading...</p>;

  if (status === 'error') return <p>Error: {session.error.message}</p>;

  if (status === 'authenticated') {
    return (
      <>
        <Header user={session.user} signOut={signOut} />
        <Todo userId={userId} />
      </>
    )
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <a
          className="border-solid  border-black border-2 rounded mt-10 px-4 pt-2 pb-2 "
          href="/login"
        >
          Login
        </a>
        <a
          className="border-solid  border-black border-2 rounded mt-10 px-4 pt-2 pb-2 "
          href="/register"
        >
          Sign Up
        </a>
      </div>
    </>
  );
}
