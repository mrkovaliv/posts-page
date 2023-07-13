import { MdFavoriteBorder } from 'react-icons/md';

import { useSelector } from 'react-redux';

import { selectFavoritesCount } from '../../redux/favorites/selectors';

import { Wrapper, Title } from './Header.style';

export const Header = () => {
  const favoritesCount = useSelector(selectFavoritesCount);

  return (
    <Wrapper>
      <Title>{favoritesCount}</Title>
      <MdFavoriteBorder />
    </Wrapper>
  );
};
