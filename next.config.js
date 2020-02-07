// next.config.js
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

module.exports = withCSS(
  withSass({
    webpack: config => {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      });

      config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

      return config;
    },
    // env: {
    //   MONGO_URI: process.env.MONGO_URI,
    // },
  })
);
