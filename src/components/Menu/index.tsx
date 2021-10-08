import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart';

import { Logo } from '~/components';

import * as S from './styles';

export default function Menu() {
  return (
    <S.Container>
      <S.IconWrapper>
        <MenuIcon />
      </S.IconWrapper>

      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon />
        </S.IconWrapper>

        <S.IconWrapper>
          <ShoppingCartIcon />
        </S.IconWrapper>
      </S.MenuGroup>
    </S.Container>
  );
}