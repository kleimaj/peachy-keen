module.exports = {
  siteMetadata: {
    title: 'Peachy Keen Website',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
