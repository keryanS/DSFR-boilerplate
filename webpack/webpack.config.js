const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "node_modules/@gouvfr/dsfr/dist/favicon", to: "favicon/" },
        { from: "node_modules/@gouvfr/dsfr/dist/fonts", to: "fonts/" },
        { from: "node_modules/@gouvfr/dsfr/dist/icons", to: "icons/" },
        { from: "node_modules/@gouvfr/dsfr/dist/dsfr.min.css", to: "" },
        { from: "node_modules/@gouvfr/dsfr/dist/dsfr.legacy.min.css", to: "" },
        { from: "node_modules/@gouvfr/dsfr/dist/dsfr.module.min.js", to: "" },
        { from: "node_modules/@gouvfr/dsfr/dist/dsfr.nomodule.min.js", to: "" },
        { from: "node_modules/@gouvfr/dsfr/dist/analytics/analytics.module.js", to: "" },
        { from: "node_modules/@gouvfr/dsfr/dist/analytics/analytics.nomodule.js", to: "" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|ico|svg|woff|woff2|webmanifest|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
            },
          },
        ],
        type: 'javascript/auto'
      },
    ]
  }
}