import { PostCard } from '../../components/PostCard';

import { usePostsQuery } from '../../hooks/usePostsQuery';

import { Wrapper } from './Posts.style';

export const Posts = () => {
  const { data, isLoading, isError } = usePostsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  return <Wrapper>{data?.map(post => <PostCard key={post.id} post={post} />)}</Wrapper>;
};
