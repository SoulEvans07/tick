import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Head from 'next/head';
import { Feed } from '~/components/feed';
import { PageLayout } from '~/components/page-layout';
import { ProfilePicture } from '~/components/profile-picture';
import { generateSSGHelper } from '~/server/helpers/ssgHelper';
import { api } from '~/utils/api';

type ProfilePageProps = InferGetStaticPropsType<typeof getStaticProps>;

export const ProfilePage: NextPage<ProfilePageProps> = (props) => {
  const { username } = props;
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
        <div className="w-full border-b border-slate-700" />
        <Feed userId={user.id} emptyMessage="User has not posted yet" />
      </PageLayout>
    </>
  );
};

export const getStaticProps = (async (context) => {
  const ssg = generateSSGHelper();

  const slug = context.params?.slug;
  if (typeof slug !== 'string') throw new Error('no slug');

  const username = slug.replace('@', '');
  await ssg.profile.getByUsername.prefetch({ username });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      slug,
      username,
    },
  };
}) satisfies GetStaticProps;

export const getStaticPaths: GetStaticPaths = () => {
  return { paths: [], fallback: 'blocking' };
};

export default ProfilePage;
