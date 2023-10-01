import Link from 'next/link';

import { time } from '~/helpers/time';
import { ProfilePicture } from '~/components/profile-picture';
import type { RouterOutputs } from '~/utils/api';

type CommentWithUser = RouterOutputs['comment']['list'][number];
export function CommentItem(comment: CommentWithUser) {
  return (
    <div key={comment.id} className="flex gap-4 border-b border-slate-700 p-4">
      <Link href={`/@${comment.author.username}`}>
        <ProfilePicture user={comment.author} />
      </Link>
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-x-1 text-slate-400">
          <Link href={`/@${comment.author.username}`}>
            <span>@{comment.author.username}</span>
          </Link>
          <span className="text-slate-600">·</span>
          <Link href={`/post/${comment.id}`}>
            <span className="text-slate-600">
              {time(comment.createdAt).fromNow()}
            </span>
          </Link>
        </div>
        <span>{comment.content}</span>
      </div>
    </div>
  );
}
