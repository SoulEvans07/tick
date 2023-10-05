import Link from 'next/link';

import { time } from '~/helpers/time';
import { ProfilePicture } from '~/components/profile-picture';
import type { RouterOutputs } from '~/utils/api';
import { CommentBubble } from '~/assets/icons/comment-bubble';

type PostWithUser = RouterOutputs['post']['list'][number];
export function PostDetailedItem(post: PostWithUser) {
  return (
    <div key={post.id} className="flex gap-4 border-slate-700 px-4 pt-4">
      <div className="flex w-full flex-col gap-y-4">
        <div className="flex-full flex items-center gap-4">
          <Link href={`/u/@${post.author.username}`}>
            <ProfilePicture user={post.author} />
          </Link>
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-x-1 text-slate-400">
              <Link href={`/u/@${post.author.username}`}>
                <span>@{post.author.username}</span>
              </Link>
              <span className="text-slate-600">·</span>
              <Link href={`/post/${post.id}`}>
                <span className="text-slate-600">
                  {time(post.createdAt).format('HH:mm MMM DD, YYYY')}
                </span>
              </Link>
            </div>
            <div>{post.content}</div>
          </div>
        </div>
        <div className="flex items-center gap-x-1 border-b border-t border-slate-700 p-2 text-slate-600 ">
          <CommentBubble width={20} height={20} />
          <span>{post._count.comments}</span>
        </div>
      </div>
    </div>
  );
}
