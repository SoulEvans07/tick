import { useState, type KeyboardEvent } from 'react';
import toast from 'react-hot-toast';
import { SignInButton, useClerk, useUser } from '@clerk/nextjs';
import { TRPCClientError } from '@trpc/client';

import { api } from '~/utils/api';
import { LoadingSpinner } from '~/components/loading';
import { userExistsWithUsername, filterUserForClient } from '~/helpers/user';
import { PageLayout } from '~/components/page-layout';
import { ProfilePicture } from '~/components/profile-picture';
import { PostFeed } from '~/components/post-feed';
import { UploadButton } from '~/components/uploadthing';

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
      <PostFeed />
    </PageLayout>
  );
}

function CreatePostWizard() {
  const { user } = useUser();
  const clerk = useClerk();

  const [content, setContent] = useState('');

  const utils = api.useContext();
  const { mutate, isLoading: isPosting } = api.post.create.useMutation({
    onMutate: async (payload) => {
      if (!userExistsWithUsername(user)) throw new TRPCClientError('No user');

      // cancel outgoing fetches (so they don't overwrite the optimistic update)
      await utils.post.list.cancel();

      // get data from cache (to use as fallback)
      const prevData = utils.post.list.getData();
      if (!prevData) throw new TRPCClientError('Post list undefined');

      utils.post.list.setData({ authorId: undefined }, (prev) => {
        if (!prev) throw new TRPCClientError('Post list undefined');

        return [
          {
            id: 'temp-post-id',
            createdAt: new Date(),
            deletedAt: null,
            authorId: user.id,
            author: filterUserForClient(user),
            content: '[opt] ' + payload.content,
            reactions: [],
            _count: { comments: 0 },
          },
          ...prev,
        ];
      });

      // Return the previous data so we can revert if something goes wrong
      return { prevData };
    },
    onSuccess: () => {
      setContent('');
      void utils.post.list.invalidate();
    },
    onError: (_err, _payload, context) => {
      if (!context) {
        throw new TRPCClientError(
          'Unable to recover post failure without context!',
        );
      }
      // If the mutation fails, use the context-value from onMutate
      utils.post.list.setData(undefined, context.prevData);
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
      <ProfilePicture user={user} onClick={() => void clerk.signOut()} />
      <input
        className="min-w-0 grow bg-transparent outline-none"
        placeholder="Type some text..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isPosting}
      />
      <UploadButton
        input={{ name: ':slack-black:' }}
        endpoint="customEmoji"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log('Files: ', res);
          toast.success('Upload Completed');
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          toast.error(`ERROR! ${error.message}`);
        }}
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
