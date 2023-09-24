import type { NextPage } from 'next';
import Head from 'next/head';

export const SinglePostPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tick</title>
      </Head>
      <main className="flex h-screen justify-center">
        Post page
      </main>
    </>
  );
};

export default SinglePostPage;
