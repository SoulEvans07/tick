import Link from 'next/link';
import cn from 'classnames';

import { time } from '~/helpers/time';
import { ProfilePicture } from '~/components/profile-picture';
import type { RouterOutputs } from '~/utils/api';
import { CommentBubble } from '~/assets/icons/comment-bubble';
import { emojiInterpolation } from '~/helpers/emoji';

type PostWithUser = RouterOutputs['post']['list'][number];
type PostItemProps = PostWithUser & { className?: string };
export function PostItem(props: PostItemProps) {
  const { className, ...post } = props;

  return (
    <div key={post.id} className={cn('flex gap-4 p-4', className)}>
      <Link href={`/u/@${post.author.username}`}>
        <ProfilePicture user={post.author} />
      </Link>
      <div className="flex w-full flex-col">
        <div className="flex flex-wrap gap-x-1 text-slate-400">
          <Link href={`/u/@${post.author.username}`}>
            <span>@{post.author.username}</span>
          </Link>
          <span className="text-slate-600">·</span>
          <Link href={`/post/${post.id}`}>
            <span className="text-slate-600">
              {time(post.createdAt).fromNow()}
            </span>
          </Link>
        </div>
        <div className="flex items-center" title={post.content}>
          {emojiInterpolation(post.content)}
        </div>
        <div className="mt-2 flex items-center gap-x-1 text-slate-600 ">
          <CommentBubble width={20} height={20} />
          <span>{post._count.comments}</span>
        </div>
      </div>
    </div>
  );
}
