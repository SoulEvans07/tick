import Image from 'next/image';
import Link from 'next/link';
import { useState, KeyboardEvent } from 'react';
import toast from 'react-hot-toast';
import { SignInButton, useUser } from '@clerk/nextjs';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

import { type RouterOutputs, api } from '~/utils/api';
import { LoadingPage, LoadingSpinner } from '../../components/loading';
import { userExistsWithUsername } from '../../helpers/user';
import { PageLayout } from '~/components/page-layout';
import { ProfilePicture } from '~/components/profile-picture';

export default function Home() {
  const { isLoaded: userLoaded, isSignedIn } = useUser();

  // Start fetching asap to build cache
  api.post.list.useQuery();

  return (
    <PageLayout>
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
    </PageLayout>
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
      <Link href={`/@${user.username}`}>
        <ProfilePicture user={user} />
      </Link>
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
      <Link href={`/@${post.author.username}`}>
        <ProfilePicture user={post.author} />
      </Link>
      <div className="flex flex-col">
        <div className="flex gap-1 text-slate-400">
          <Link href={`/@${post.author.username}`}>
            <span>@{post.author.username}</span>
          </Link>
          <span>·</span>
          <Link href={`/post/${post.id}`}>
            <span>{dayjs(post.createdAt).fromNow()}</span>
          </Link>
        </div>
        <span>{post.content}</span>
      </div>
    </div>
  );
}

function Feed() {
  const { data: posts, isLoading: postsLoading } = api.post.list.useQuery();

  return (
    <div className="flex flex-col overflow-y-scroll">
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
