module.exports = {
  publicPath: '',
  assetsDir: 'static',

  /** 运行build:test 开启 SourceMap */
  productionSourceMap: false,

  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      scss: {
        // @/ 是 src/ 的别名
        // 注意：在 sass-loader v7 中，这个选项名是 "data"
        prependData: `
                @import "@/assets/custom_theme.scss";
                @import "zoom-intro/dist/styles/index.scss";
                `,
      },
    },
  },
};
