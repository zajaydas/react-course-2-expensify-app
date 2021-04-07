//entry -> output
// const path = require("path");
//
//console.log(__dirname);
//console.log(path.join(__dirname, "public"));

//console.log(__dirname);

// module.exports = {
//   entry: "./src/app.js",
//   output: {
//     path: path.join(__dirname, "public"),
//     filename: "bundle.js",
//   },
//   module: {
//     rules: [
//       {
//         loader: "babel-loader",
//         test: /\.js$/,
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.s?css$/,
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//     ],
//   },
//   devtool: "cheap-module-eval-source-map",
//   devServer: {
//     contentBase: path.join(__dirname, "public"),
//     historyApiFallback: true,
//   },
// };
//---------------------------------------------------

const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//production webpack
module.exports = (env) => {
  const isProduction = env === "production";
  const CSSExtract = new ExtractTextPlugin("styles.css");

  //console.log("env", env);
  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          // use: ["style-loader", "css-loader", "sass-loader"],
          use: CSSExtract.extract({
            // use: ["css-loader", "sass-loader"],
            use: [
              {
                loader: "css-loader",
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true,
                },
              },
            ],
          }),
        },
      ],
    },
    plugins: [CSSExtract],
    // devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
    devtool: isProduction ? "source-map" : "inline-source-map",

    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
    },
  };
};
