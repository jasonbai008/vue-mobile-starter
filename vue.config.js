const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: (loaderContext) => {
          return {
            plugins: [
              // ["autoprefixer"],
              // vant px转vw。参坑：单独写在postcss.config.js中无法解析vant内部样式
              {
                "postcss-px-to-viewport": {
                  unitToConvert: "px",
                  // 区分vant设计以375为基准。实际项目ui为750的情况
                  viewportWidth: loaderContext.resourcePath.includes("vant")
                    ? 375
                    : 750,
                  unitPrecision: 5,
                  propList: ["*"],
                  viewportUnit: "vw",
                  fontViewportUnit: "vw",
                  selectorBlackList: [],
                  minPixelValue: 1,
                  mediaQuery: false,
                  replace: true,
                  exclude: [],
                  landscape: false,
                  landscapeUnit: "vw",
                  landscapeWidth: 568,
                },
              },
            ],
          };
        },
      },
    },
  },
});
