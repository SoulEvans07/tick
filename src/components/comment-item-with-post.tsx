import type { RouterOutputs } from '~/utils/api';
import { PostItem } from '~/components/post-item';
import { CommentItem } from '~/components/comment-item';

type CommentWithUser = RouterOutputs['comment']['listByAuthor'][number];
export function CommentItemWithPost(comment: CommentWithUser) {
  return (
    <div className="relative flex flex-col">
      <PostItem {...comment.post} className="pb-0" />
      <CommentItem {...comment} />
      <div className="absolute bottom-16 left-10 top-16 my-1.5 rounded border-l border-r border-slate-700"></div>
    </div>
  );
}
