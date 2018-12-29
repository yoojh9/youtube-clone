/* 
webpack.config.js는 모던 자바스크립트 파일이 아니므로 
import나 export default config;와 같은 문법을 쓸 수 없음
*/
const path = require("path"); //import path from "path" 와 같은거임

// path.resolve() : absolute한 경로로 만들어준다.
// __dirname: 현재 프로젝트의 디렉토리 이름으로 node.js의 전역변수이다.
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ENTRY_FILE,
  output: {
    path: OUTPUT_DIR,
    filename: "[name].[format]"
  }
};

module.exports = config;
