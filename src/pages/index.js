import * as React from 'react';
import { Link } from 'gatsby';

// markup
export default () => {
  return (
    <>
      <h1>Home</h1>
      <Link to='/about'>About</Link>
      <Link to='/merch'>Merch</Link>
      <Link to='/shows'>Shows</Link>
      <Link to='/contact'>Contact</Link>
    </>
  );
};
