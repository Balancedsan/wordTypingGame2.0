const path = require("path");



module.exports = {
  mode: 'development',
  entry: ["./js/main.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundleMain.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  }
};
