import Link from 'next/link';
import cn from 'classnames';

import { time } from '~/helpers/time';
import { ProfilePicture } from '~/components/profile-picture';
import type { RouterOutputs } from '~/utils/api';
import { emojiInterpolator } from '~/helpers/emoji';

type CommentWithUser = RouterOutputs['comment']['list'][number];
type CommentItemProps = CommentWithUser & { className?: string };
export function CommentItem(props: CommentItemProps) {
  const { className, ...comment } = props;
  return (
    <div className="flex gap-4 p-4">
      <Link href={`/u/@${comment.author.username}`}>
        <ProfilePicture user={comment.author} />
      </Link>
      <div className={cn('flex flex-col', className)}>
        <div className="flex flex-wrap gap-x-1 text-slate-400">
          <Link href={`/u/@${comment.author.username}`}>
            <span>@{comment.author.username}</span>
          </Link>
          <span className="text-slate-600">·</span>
          {/* <Link href={`/comment/${comment.id}`}> */}
          <span className="text-slate-600">
            {time(comment.createdAt).fromNow()}
          </span>
          {/* </Link> */}
        </div>
        <div className="flex items-center" title={comment.content}>
          {emojiInterpolator.parse(comment.content)}
        </div>
      </div>
    </div>
  );
}
