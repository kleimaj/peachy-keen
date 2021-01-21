import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import Logo from '../assets/icons/logo.svg';

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
`;

const Header = () => (
  <header>
    <NavLink to='/'>
      <Logo
        css={css`
          width: 100px;
          height: 100px;
        `}
      />
    </NavLink>
  </header>
);

export default Header;
