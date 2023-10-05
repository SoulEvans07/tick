import { Fragment } from 'react';
import { api } from '~/utils/api';
import { LoadingPage } from '~/components/loading';
import { PostItem } from '~/components/post-item';

interface PostFeedProps {
  userId?: string;
  emptyMessage?: string;
}

export function PostFeed(props: PostFeedProps) {
  const { userId, emptyMessage = 'No posts yet' } = props;
  const { data: posts, isLoading: postsLoading } = api.post.list.useQuery(
    { authorId: userId },
    { refetchOnWindowFocus: true }
  );

  return (
    <div className="flex flex-col overflow-y-scroll">
      {postsLoading ? (
        <div className="flex grow">
          <LoadingPage />
        </div>
      ) : !posts?.length ? (
        emptyMessage
      ) : (
        posts.map((post) => (
          <Fragment key={post.id}>
            <PostItem {...post} />
            <div className="w-full border-b border-slate-700" />
          </Fragment>
        ))
      )}
    </div>
  );
}
