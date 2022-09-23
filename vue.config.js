const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/partials/_variables.scss"; @import "@/assets/scss/partials/_mixins.scss";`,
        sourceMap: true,
      },
    },
  },
})
