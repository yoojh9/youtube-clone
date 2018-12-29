/* 
webpack.config.js는 모던 자바스크립트 파일이 아니므로 
import나 export default config;와 같은 문법을 쓸 수 없음
*/
const path = require("path"); // import path from "path" 와 같은거임
const ExtractCSS = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const MODE = process.env.WEBPACK_ENV;

// path.resolve() : absolute한 경로로 만들어준다.
// __dirname: 현재 프로젝트의 디렉토리 이름으로 node.js의 전역변수이다.
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: ExtractCSS.extract([
          // 실행은 밑에서부터 위로 진행
          {
            loader: "css-loader" // 웹팩이 css를 이해할 수 있도록 해줌
          },
          {
            loader: "postcss-loader", // css 호환성에 맞게 prefix를 설정해줌
            options: {
              plugins() {
                return [autoprefixer({ browsers: "cover 99.5%" })];
              }
            }
          },
          {
            loader: "sass-loader" // scss -> css로 변환
          }
        ])
      }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js"
  },
  plugins: [new ExtractCSS("styles.css")]
};

module.exports = config;
