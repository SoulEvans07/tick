import type { NextPage } from 'next';
import Head from 'next/head';
import { PageLayout } from '~/components/page-layout';

export const SinglePostPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <PageLayout>Post page</PageLayout>
    </>
  );
};

export default SinglePostPage;
