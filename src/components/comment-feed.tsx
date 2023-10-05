import { api } from '~/utils/api';
import { LoadingPage } from '~/components/loading';
import { CommentItemWithPost } from '~/components/comment-item-with-post';

interface CommentFeedProps {
  userId: string;
  emptyMessage?: string;
}

export function CommetFeed(props: CommentFeedProps) {
  const { userId, emptyMessage = 'No comments yet' } = props;
  const { data: comments, isLoading: postsLoading } =
    api.comment.listByAuthor.useQuery(
      { authorId: userId },
      { refetchOnWindowFocus: true }
    );

  return (
    <div className="flex flex-col overflow-y-scroll">
      {postsLoading ? (
        <div className="flex grow">
          <LoadingPage />
        </div>
      ) : !comments?.length ? (
        emptyMessage
      ) : (
        comments.map((comment) => (
          <>
            <CommentItemWithPost key={comment.id} {...comment} />
            <div className="w-full border-b border-slate-700" />
          </>
        ))
      )}
    </div>
  );
}
