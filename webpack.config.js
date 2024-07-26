//import
const path = require("path"); //node.js환경이면 어디서든 사용할 수 있는 path라는 전역모듈을 가지고 와서 path라는 변수에 할당을 한다.
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
//export
module.exports = {
  //parcel index.html
  //파일을 읽어들이기 시작하는 진입전 설정
  entry: "./js/main.js",
  //결과물을 반환하는 설정
  output: {
    //path: path.resolve(__dirname, "dist"),
    //filename: "main.js",
    clean: true,
  },

  module:{
    rules: [
      {
        test:/\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  //번들링 후의 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: "./index.html"
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }]
    }),
    //static 내부의 내용이 복사되어 dist로 들어감
  ],
  devServer: {
    host: "localhost"
  }
};
