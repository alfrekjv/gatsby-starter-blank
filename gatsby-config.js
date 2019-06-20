module.exports = {
  siteMetadata: {
    name: `Gatsby starter: Typescript + SASS`,
    tagline: `Gatsby starter: Typescript + SASS`
  },
  plugins: [
    {
        resolve: 'gatsby-plugin-react-svg',
        options: {
            rule: {
              include: `${__dirname}/src/assets/vectors`
            }
        }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-react-helmet`
  ],
}
