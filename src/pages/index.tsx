import Head from "next/head";
import { SignInButton } from "@clerk/nextjs";

export default function Welcome() {
  return (
    <>
      <Head>
        <title>Tick</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SignInButton />
      </main>
    </>
  );
}
