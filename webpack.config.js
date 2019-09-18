const path = require("path");

module.exports = function(env, argv) {
	const isEnvDevelopment = argv.mode === "development";
	
  const config = {
    mode: argv.mode,
    entry: {
      app: "./index.js"
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: "/dist/",
      filename: "[name].js",
      chunkFilename: isEnvDevelopment
        ? "[name].chunk.js"
        : "[name].[contenthash:8].chunk.js"
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader"
        }
      ]
    },
    resolve: {
      alias: {
        ...(argv.preact && {
          react: "preact/compat",
          "react-dom/test-utils": "preact/test-utils",
          "react-dom": "preact/compat" // Must be below test-utils
        })
      },
      modules: ["node_modules"]
    },
    devtool: isEnvDevelopment ? "cheap-module-source-map" : "source-map",
    plugins: []
  };

  return config;
};
