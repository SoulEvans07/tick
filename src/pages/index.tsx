import Head from 'next/head';
import { SignIn } from '@clerk/nextjs';

export default function Welcome() {
  return (
    <>
      <Head>
        <title>Sign in | Tick</title>
      </Head>
      <main className="flex h-screen items-center justify-center">
        <SignIn />
      </main>
    </>
  );
}
