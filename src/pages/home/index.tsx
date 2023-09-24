import Link from 'next/link';
import { useState, KeyboardEvent } from 'react';
import toast from 'react-hot-toast';
import { SignInButton, useUser } from '@clerk/nextjs';

import { api } from '~/utils/api';
import { LoadingSpinner } from '../../components/loading';
import { userExistsWithUsername } from '../../helpers/user';
import { PageLayout } from '~/components/page-layout';
import { ProfilePicture } from '~/components/profile-picture';
import { Feed } from '~/components/feed';

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
