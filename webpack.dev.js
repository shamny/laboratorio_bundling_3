const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  stats: "errors-only",
  devServer: {
    port: 8081,
  },
});
