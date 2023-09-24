import { api } from '~/utils/api';
import { LoadingPage } from '~/components/loading';
import { PostItem } from '~/components/post-item';

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
