import Head from 'next/head';
import Image from 'next/image';
import { useState, KeyboardEvent } from 'react';
import { SignInButton, useUser } from '@clerk/nextjs';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

import { type RouterOutputs, api } from '~/utils/api';
import { LoadingPage, LoadingSpinner } from '../../components/loading';
import { userExistsWithUsername } from '../../helpers/user';
import toast from 'react-hot-toast';

export default function Home() {
  const { isLoaded: userLoaded, isSignedIn } = useUser();

  // Start fetching asap to build cache
  api.post.list.useQuery();

  return (
    <>
      <Head>
        <title>Tick</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <div className="h-full w-full border-x border-slate-700 md:max-w-2xl">
          {userLoaded && (
            <div className="border-b border-slate-700 p-4">
              {!isSignedIn ? (
                <div className="flex justify-center">
                  <SignInButton />
                </div>
              ) : (
                <CreatePostWizard />
              )}
            </div>
          )}
          <Feed />
        </div>
      </main>
    </>
  );
}

type UserImageProps = {
  user: PostWithUser['author'];
  priority?: boolean;
};

function UserImage(props: UserImageProps) {
  const { user, priority } = props;
  return (
    <Image
      src={user.imageUrl}
      alt={`@${user.username} profile`}
      width={100}
      height={100}
      className="h-14 w-14 rounded-full"
      placeholder="empty"
      priority={priority}
    />
  );
}

function CreatePostWizard() {
  const { user } = useUser();

  const [content, setContent] = useState('');

  const ctx = api.useContext();

  const { mutate, isLoading: isPosting } = api.post.create.useMutation({
    onSuccess: () => {
      setContent('');
      void ctx.post.list.invalidate();
    },
    onError: () => {
      toast.error('Failed to post! Please try again later.');
    },
  });
  const sendPost = () => mutate({ content: content.trim() });
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && content !== '' && !e.getModifierState('Shift')) {
      e.preventDefault();
      sendPost();
    }
  };

  if (!userExistsWithUsername(user)) return null;

  return (
    <div className="flex w-full gap-4">
      <UserImage user={user} />
      <input
        className="grow bg-transparent outline-none"
        placeholder="Type some text..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isPosting}
      />
      {content !== '' && !isPosting && <button onClick={sendPost}>Post</button>}
      {isPosting && (
        <div className="flex items-center justify-center">
          <LoadingSpinner size={20} />
        </div>
      )}
    </div>
  );
}

type PostWithUser = RouterOutputs['post']['list'][number];

function PostItem(post: PostWithUser) {
  return (
    <div key={post.id} className="flex gap-4 border-b border-slate-700 p-4">
      <UserImage user={post.author} />
      <div className="flex flex-col">
        <div className="flex gap-1 text-slate-400">
          <span>@{post.author.username}</span>
          <span>·</span>
          <span>{dayjs(post.createdAt).fromNow()}</span>
        </div>
        <span>{post.content}</span>
      </div>
    </div>
  );
}

function Feed() {
  const { data: posts, isLoading: postsLoading } = api.post.list.useQuery();

  return (
    <div className="flex flex-col">
      {postsLoading ? (
        <div className="flex grow">
          <LoadingPage />
        </div>
      ) : !posts?.length ? (
        'No posts yet'
      ) : (
        posts.map((post) => <PostItem key={post.id} {...post} />)
      )}
    </div>
  );
}
