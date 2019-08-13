module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'LobbyAPI',
        fieldName: 'lobby',
        url: '/.netlify/functions/graphql',
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Implementando REST con Gatsby`,
    author: `Cristobal Aguirre @jcaguirre89`,
    description: `Una pagina estatica con data dinamica`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/jcaguirre89`,
      },
      {
        name: `github`,
        url: `https://github.com/jcaguirre89`,
      },
    ],
  },
}
