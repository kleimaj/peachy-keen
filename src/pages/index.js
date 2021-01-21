import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

// markup
export default () => {
  return (
    <Layout>
      <h1>Home</h1>
      <Link to='/about'>About</Link>
      <Link to='/merch'>Merch</Link>
      <Link to='/shows'>Shows</Link>
      <Link to='/contact'>Contact</Link>
    </Layout>
  );
};
