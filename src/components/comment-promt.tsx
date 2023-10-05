import Link from 'next/link';
import { useState, type KeyboardEvent } from 'react';
import { useUser } from '@clerk/nextjs';
import { TRPCClientError } from '@trpc/client';
import toast from 'react-hot-toast';

import { api } from '~/utils/api';
import { ProfilePicture } from '~/components/profile-picture';
import { filterUserForClient, userExistsWithUsername } from '~/helpers/user';
import { LoadingSpinner } from '~/components/loading';

type CommentPromptProps = { postId: string };
export function CommentPrompt(props: CommentPromptProps) {
  const { postId } = props;
  const { user } = useUser();

  const [content, setContent] = useState('');

  const utils = api.useContext();
  const { mutate, isLoading: isPosting } = api.comment.create.useMutation({
    onMutate: async (payload) => {
      if (!userExistsWithUsername(user)) throw new TRPCClientError('No user');

      // cancel outgoing fetches (so they don't overwrite the optimistic update)
      await utils.post.getById.cancel({ id: postId });

      // get data from cache (to use as fallback)
      const prevPostById = utils.post.getById.getData({ id: postId });
      if (!prevPostById) {
        throw new TRPCClientError(`Post ${postId} undefined`);
      }

      utils.post.getById.setData({ id: postId }, (prev) => {
        if (!prev) {
          throw new TRPCClientError(`Post ${postId} undefined`);
        }

        return {
          ...prev,
          _count: { comments: prev._count.comments + 1 },
          comments: [
            ...prev.comments,
            {
              id: 'temp-post-id',
              postId,
              createdAt: new Date(),
              deletedAt: null,
              authorId: user.id,
              author: filterUserForClient(user),
              content: '[opt] ' + payload.content,
              reactions: [],
            },
          ],
        };
      });

      // Return the previous data so we can revert if something goes wrong
      return { prevPostById };
    },
    onSuccess: () => {
      setContent('');
      void utils.post.getById.invalidate({ id: postId });
    },
    onError: (_err, _payload, context) => {
      if (!context) {
        throw new TRPCClientError(
          'Unable to recover comment failure without context!'
        );
      }
      // If the mutation fails, use the context-value from onMutate
      utils.post.getById.setData({ id: postId }, context.prevPostById);
      toast.error('Failed to post! Please try again later.');
    },
  });

  const sendComment = () => mutate({ postId, content: content.trim() });
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && content !== '' && !e.getModifierState('Shift')) {
      e.preventDefault();
      sendComment();
    }
  };

  if (!userExistsWithUsername(user)) return null;

  return (
    <div className="flex w-full gap-4 border-b border-slate-700 p-4">
      <Link href={`/u/@${user.username}`} className="min-w-max">
        <ProfilePicture user={user} />
      </Link>
      <input
        className="min-w-0 grow bg-transparent outline-none"
        placeholder="Reply..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isPosting}
      />
      {content !== '' && !isPosting && (
        <button onClick={sendComment}>Reply</button>
      )}
      {isPosting && (
        <div className="flex items-center justify-center">
          <LoadingSpinner size={20} />
        </div>
      )}
    </div>
  );
}
