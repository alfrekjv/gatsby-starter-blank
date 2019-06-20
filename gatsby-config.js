module.exports = {
  siteMetadata: {
    name: `Skillshare: How to Build your Online Portfolio from Scratch with Gatsby`,
    tagline: `How to Build your Online Portfolio from Scratch with Gatsby`
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
