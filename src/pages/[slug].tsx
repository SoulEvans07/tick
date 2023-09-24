import type { NextPage } from 'next';
import Head from 'next/head';

export const ProfilePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tick</title>
      </Head>
      <main className="flex h-screen justify-center">
        Profile page
      </main>
    </>
  );
};

export default ProfilePage;
