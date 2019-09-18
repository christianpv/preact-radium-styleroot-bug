module.exports = (api, opts, env) => {
  api.cache(true);
  return {
    presets: [["@babel/preset-env"], ["@babel/preset-react"]].filter(Boolean),
    plugins: [].filter(Boolean)
  };
};
