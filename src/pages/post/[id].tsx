import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Head from 'next/head';
import { CommentItem } from '~/components/comment-item';
import { CommentPrompt } from '~/components/comment-promt';

import { PageLayout } from '~/components/page-layout';
import { PostDetailedItem } from '~/components/post-detailed-item';
import { truncate } from '~/helpers/string';
import { generateSSGHelper } from '~/server/helpers/ssgHelper';
import { api } from '~/utils/api';

type SinglePostPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export const SinglePostPage: NextPage<SinglePostPageProps> = (props) => {
  const { id } = props;
  const { data: post, isLoading } = api.post.getById.useQuery({ id });

  if (!post) return <div>404</div>;

  const shortContent = truncate(post.content, 16);

  return (
    <>
      <Head>
        <title>
          {shortContent} - @{post.author.username}
        </title>
      </Head>
      <PageLayout>
        <PostDetailedItem {...post} />
        <CommentPrompt postId={id} />
        <div className="flex flex-col overflow-y-scroll">
          {post.comments.map((comment) => (
            <CommentItem key={comment.id} {...comment} />
          ))}
        </div>
      </PageLayout>
    </>
  );
};

export const getStaticProps = (async (context) => {
  const id = context.params?.id;
  if (typeof id !== 'string') throw new Error('no id');

  const ssg = generateSSGHelper();
  await ssg.post.getById.prefetch({ id });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      id,
    },
  };
}) satisfies GetStaticProps;

export const getStaticPaths: GetStaticPaths = async () => {
  const ssg = generateSSGHelper();
  const posts = await ssg.post.list.fetch();
  // TODO: limit
  const postUrls = posts.map((post) => `/post/${post.id}`);

  return { paths: postUrls, fallback: 'blocking' };
};

export default SinglePostPage;
