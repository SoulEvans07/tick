import Link from 'next/link';

import { time } from '~/helpers/time';
import { ProfilePicture } from '~/components/profile-picture';
import { RouterOutputs } from '~/utils/api';

type PostWithUser = RouterOutputs['post']['list'][number];
export function PostItem(post: PostWithUser) {
  return (
    <div key={post.id} className="flex gap-4 border-b border-slate-700 p-4">
      <Link href={`/@${post.author.username}`}>
        <ProfilePicture user={post.author} />
      </Link>
      <div className="flex flex-col">
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
      </div>
    </div>
  );
}
