require("dotenv").config()

var proxy = require("http-proxy-middleware")
module.exports = {
  pathPrefix: `/blog`,
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
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
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
}
