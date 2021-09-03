const config = require("./examples/config");
const path = require("path");
const resolve = dir => {
  return path.join(__dirname, dir);
};
module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  indexPath: "index.html",
  pages: {
    index: {
      // page 的入口
      entry: "examples/main.js",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: config.systemName,
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // If you are using less-loader@5 please spread the lessOptions to options directly
          // modifyVars: {
          //   'primary-color': '#1DA57A',
          //   'link-color': '#1DA57A',
          //   'border-radius-base': '2px',
          // },
          javascriptEnabled: true
        }
      }
    }
  },

  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("examples"))
      .set("@p", resolve("packages"));
    // config.plugin("webpack-bundle-analyzer").use(BundleAnalyzerPlugin);

    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .test(/\.svg$/)
      .use("svg-url-loader")
      .loader("svg-url-loader");

    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap(options =>
        Object.assign(options, {
          limit: Infinity
        })
      );

    config.module
      .rule("js")
      .include.add("/packages/")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        return options;
      });
  }
};
