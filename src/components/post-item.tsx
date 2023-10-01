import Link from 'next/link';

import { time } from '~/helpers/time';
import { ProfilePicture } from '~/components/profile-picture';
import type { RouterOutputs } from '~/utils/api';
import { CommentBubble } from '~/assets/icons/comment-bubble';

type PostWithUser = RouterOutputs['post']['list'][number];
export function PostItem(post: PostWithUser) {
  return (
    <div key={post.id} className="flex gap-4 border-b border-slate-700 p-4">
      <Link href={`/@${post.author.username}`}>
        <ProfilePicture user={post.author} />
      </Link>
      <div className="flex w-full flex-col">
        <div className="flex flex-wrap gap-x-1 text-slate-400">
          <Link href={`/@${post.author.username}`}>
            <span>@{post.author.username}</span>
          </Link>
          <span className="text-slate-600">·</span>
          <Link href={`/post/${post.id}`}>
            <span className="text-slate-600">
              {time(post.createdAt).fromNow()}
            </span>
          </Link>
        </div>
        <span>{post.content}</span>
        <div className="mt-2 flex items-center gap-x-1 text-slate-600 ">
          <CommentBubble width={20} height={20} />
          <span>{post._count.comments}</span>
        </div>
      </div>
    </div>
  );
}
