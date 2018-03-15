const debug = process.env.NODE_ENV !== "production";
const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./app/src/js/app.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [ 'react-hot-loader', 'babel-loader' ],
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test   : /\.js$/,
        loaders: [ 'react-hot-loader', 'babel-loader' ],
        include: path.join(__dirname, 'node_modules', 'redux-devtools', 'src')
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.styl/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '__[hash:base64:5]'
            }
          }
        ],
      },
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'static/images/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.eot(\?.*)?$/,
        loader: 'url-loader?limit=100000',
        options: {
          limit: 10000,
          mimetype: 'application/vnd.ms-fontobject',
          name: 'static/fonts/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.otf(\?.*)?$/,
        loader: 'url-loader?limit=100000',
        options: {
          limit: 10000,
          mimetype: 'font/opentype',
          name: 'static/fonts/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.ttf(\?v=\d+.\d+.\d+)?$/,
        loader: 'url-loader?limit=100000',
        options: {
          limit: 10000,
          mimetype: 'application/octet-stream',
          name: 'static/fonts/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.woff(\?.*)?$/,
        loader: 'url-loader?limit=100000',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff',
          name: 'static/fonts/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.woff2(\?.*)?$/,
        loader: 'url-loader?limit=100000',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff2',
          name: 'static/fonts/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.svg(\?v=\d+.\d+.\d+)?$/,
        loader: 'url-loader?limit=100000',
        options: {
          limit: 10000,
          mimetype: 'image/svg+xml',
          name: 'static/fonts/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'styles': resolve(__dirname, 'src/styles'),
      'lib': resolve(__dirname, 'lib')
    },
    modules: ['node_modules', 'shared'],
    extensions: ['.js', '.json', '.jsx'],
  },
  output: {
    path: path.join(__dirname, "/app/dist/js/"),
    filename: "app.min.js",
    publicPath: "/js/"
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
