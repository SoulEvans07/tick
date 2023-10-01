import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { z } from 'zod';
import cn from 'classnames';
import { cva } from 'class-variance-authority';

import { PostFeed } from '~/components/post-feed';
import { PageLayout } from '~/components/page-layout';
import { CommetFeed } from '~/components/comment-feed';
import { ProfilePicture } from '~/components/profile-picture';
import { generateSSGHelper } from '~/server/helpers/ssgHelper';
import { api } from '~/utils/api';

type ProfilePageProps = InferGetStaticPropsType<typeof getStaticProps>;
export default function ProfilePage(props: ProfilePageProps) {
  const { username, currentTab } = props;
  const { data: user, isLoading } = api.profile.getByUsername.useQuery({
    username,
  });

  if (!user) return <div>404</div>;

  return (
    <>
      <Head>
        <title>@{username} - Profile</title>
      </Head>
      <PageLayout>
        <div className="relative h-36 bg-slate-600 ">
          <ProfilePicture
            className="absolute bottom-0 left-0 -mb-[64px] ml-4 rounded-full border-4 border-slate-900 bg-slate-900"
            size="128"
            user={user}
          />
        </div>
        <div className="mt-[64px] p-4 text-2xl font-bold">@{username}</div>
        <ProfileTabs currentTab={currentTab} baseUrl={`/@${username}`} />
        <div className="w-full border-b border-slate-700" />
        {currentTab === 'posts' && (
          <PostFeed userId={user.id} emptyMessage="User has not posted yet" />
        )}
        {currentTab === 'replies' && (
          <CommetFeed
            userId={user.id}
            emptyMessage="User has not commented yet"
          />
        )}
      </PageLayout>
    </>
  );
}

const tabVariants = cva(
  'relative flex flex-1 items-center justify-center p-4 font-semibold transition-colors duration-150 ease-in-out hover:bg-slate-800',
  {
    variants: {
      active: {
        false: 'text-slate-400',
        true: 'text-slate-100 after:absolute after:inset-0 after:border-b-4 after:border-blue-400 after:content-[""]',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

type Tab = { key: string; title: string; url: string };
const tabs = [
  { key: 'posts', title: 'Posts', url: '/' } as const,
  { key: 'replies', title: 'Replies', url: '/replies' } as const,
] satisfies Tab[];
type TabOptions = (typeof tabs)[number]['key'];

type ProfileTabsProps = { currentTab: TabOptions; baseUrl: string };
function ProfileTabs(props: ProfileTabsProps) {
  const { currentTab, baseUrl } = props;

  return (
    <div className="flex w-full items-center justify-around">
      {tabs.map((tab) => (
        <Link
          className={cn(tabVariants({ active: currentTab === tab.key }))}
          key={tab.key}
          href={baseUrl + tab.url}
        >
          {tab.title}
        </Link>
      ))}
    </div>
  );
}

const ProfileTag = z
  .string()
  .refine((val) => val.startsWith('@'), 'Must start with @');
const ProfileSubPage = z.union([z.literal('posts'), z.literal('replies')]);
const ProfileSlug = z.union([
  z.tuple([ProfileTag]),
  z.tuple([ProfileTag, ProfileSubPage]),
]);

export const getStaticProps = (async (context) => {
  const slug = ProfileSlug.parse(context.params?.slug);
  const username = slug[0].replace('@', '');

  const ssg = generateSSGHelper();
  await ssg.profile.getByUsername.prefetch({ username });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      slug,
      username,
      currentTab: slug[1] ?? 'posts',
    },
  };
}) satisfies GetStaticProps;

export const getStaticPaths: GetStaticPaths = async () => {
  const ssg = generateSSGHelper();
  const profiles = await ssg.profile.list.fetch();
  // TODO: limit
  const profileUrls = profiles.map((profile) => `/@${profile.username}`);

  return { paths: profileUrls, fallback: 'blocking' };
};
