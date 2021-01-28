import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import Logo from '../assets/icons/logo.svg';

const Wrapper = styled.header`
  background: #feeee8;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 550px) / 2);
  align-items: center;
`;
const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => (
  <Wrapper>
    <NavLink to='/'>
      <Logo
        css={css`
          width: 100px;
          height: 100px;
        `}
      />
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
        display: flex;
      `}
    >
      <NavLink to='/' activeClassName='current-page'>
        Home
      </NavLink>
      <NavLink to='/about' activeClassName='current-page'>
        About
      </NavLink>
      <NavLink to='/merch' activeClassName='current-page'>
        Merch
      </NavLink>
      <NavLink to='/shows' activeClassName='current-page'>
        Shows
      </NavLink>
      <NavLink to='/contact' activeClassName='current-page'>
        Contact
      </NavLink>
    </nav>
  </Wrapper>
);

export default Header;
