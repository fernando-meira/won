import { useState } from 'react';
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart';

import Logo from 'components/Logo';
import MediaMatch from 'components/MediaMatch';

import * as S from './styles';
import Button from '../Button';

export type MenuProps = {
  username?: string;
};

const Menu = ({ username }: MenuProps) => {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  return (
    <S.Container>
      <MediaMatch lessThan="medium">
        <S.IconWrapper
          aria-label="Open menu"
          onClick={() => setIsVisibleMenu(true)}
        >
          <MenuIcon />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper aria-label="Logo">
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>

          <S.MenuLink href="#">Store</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper aria-label="Search">
          <SearchIcon />
        </S.IconWrapper>

        <S.IconWrapper aria-label="Open shopping cart">
          <ShoppingCartIcon />
        </S.IconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Button size="medium">Sign In</Button>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuMobile aria-hidden={!isVisibleMenu} isVisibleMenu={isVisibleMenu}>
        <CloseIcon
          aria-label="close menu"
          onClick={() => setIsVisibleMenu(false)}
        />

        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>

          <S.MenuLink href="#">Store</S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>

              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Button isFullWidth size="large">
              Log in now
            </Button>

            <span>or</span>

            <S.CreateAccount href="#">Sign up</S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuMobile>
    </S.Container>
  );
};

export default Menu;
