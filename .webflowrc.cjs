module.exports = {
  host: "https://api.webflow.com",
  rootDir: "./src/lib/devlink",
  siteId: process.env.SITE_ID,
  authToken: process.env.WF_AUTH_TOKEN, // An environment variable is recommended for this field.
  cssModules: true,
  components: "/Svelte/i",
  fileExtensions: {
    js: "jsx"
  }
}