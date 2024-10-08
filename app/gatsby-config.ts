import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Red Panda Finder`,
    siteUrl: `https://redpandafinder.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-mdx", 
    
    {
      resolve: 'gatsby-source-filesystem-fast',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },

    {
      resolve: 'gatsby-source-filesystem-fast',
      options: {
        name: 'pandas',
        path: `${__dirname}/data/pandas`,
        noHashing: true
      }
    }
  ]
};

export default config;
