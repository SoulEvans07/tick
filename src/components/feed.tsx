import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

import { LoadingPage } from '~/components/loading';
import { ProfilePicture } from '~/components/profile-picture';
import { RouterOutputs, api } from '~/utils/api';

interface FeedProps {
  userId?: string;
  emptyMessage?: string;
}

export function Feed(props: FeedProps) {
  const { userId, emptyMessage = 'No posts yet' } = props;
  const { data: posts, isLoading: postsLoading } = api.post.list.useQuery({
    userId,
  });

  return (
    <div className="flex flex-col overflow-y-scroll">
      {postsLoading ? (
        <div className="flex grow">
          <LoadingPage />
        </div>
      ) : !posts?.length ? (
        emptyMessage
      ) : (
        posts.map((post) => <PostItem key={post.id} {...post} />)
      )}
    </div>
  );
}

type PostWithUser = RouterOutputs['post']['list'][number];
function PostItem(post: PostWithUser) {
  return (
    <div key={post.id} className="flex gap-4 border-b border-slate-700 p-4">
      <Link href={`/@${post.author.username}`}>
        <ProfilePicture user={post.author} />
      </Link>
      <div className="flex flex-col">
        <div className="flex gap-1 text-slate-400">
          <Link href={`/@${post.author.username}`}>
            <span>@{post.author.username}</span>
          </Link>
          <span className="text-slate-600">·</span>
          <Link href={`/post/${post.id}`}>
            <span className="text-slate-600">
              {dayjs(post.createdAt).fromNow()}
            </span>
          </Link>
        </div>
        <span>{post.content}</span>
      </div>
    </div>
  );
}
