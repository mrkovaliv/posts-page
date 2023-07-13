import { FC } from 'react';
import { useSelector } from 'react-redux';

import { useActions } from '../../hooks/useActions';
import { IPostData } from '../../types/post';
import { selectIsExistPost } from '../../redux/favorites/selectors';

import { Wrapper, Title, BodyText, Button } from './PostCard.style';

interface IPostCardProps {
  post: IPostData;
}

export const PostCard: FC<IPostCardProps> = ({ post }) => {
  const isExistPost = useSelector(selectIsExistPost(post));

  const { toggleFavorites } = useActions();

  return (
    <Wrapper greyscale={isExistPost}>
      <Title>{post.title}</Title>
      <BodyText>{post.body}</BodyText>
      <Button onClick={() => toggleFavorites(post)}>{isExistPost ? 'Remove from favorite' : 'Add to favorite'}</Button>
    </Wrapper>
  );
};
