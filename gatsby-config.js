module.exports = {
  siteMetadata: {
    title: 'Eli Rodtriguez',
    author: 'Salem Aziel',
    description: 'Eli Rodtriguez Profile',
    banner: 'src/images/bg.jpg'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Eli Rodtriguez Profile',
        short_name: 'Eli Rodriguez',
        start_url: '/',
        background_color: '#0e71c8',
        theme_color: '#0e71c8',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
