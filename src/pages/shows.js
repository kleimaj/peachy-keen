import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

export default () => (
  <Layout>
    <h1>Shows</h1>
    <p>This is the about page</p>
    <Link to='/'>&larr; Back to Home</Link>
  </Layout>
);
