import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = `query MyQuery {
        site {
          siteMetadata {
            title
            description
          }
          }
      }
      `;
};
