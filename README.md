# youtube-clone

## 1. Webpack

- 코드의 양이 많아지면 코드의 유지와 보수가 쉽도록 코드를 모듈로 나누어 관리하는 모듈 시스템이 필요한데 javascript는 언어 자체가 지원하는 모듈 시스템이 없다. 이런 한계를 극복하기 위해 여러가지 도구를 활용하는데 그 도구 중에 하나가 webpack이다.
- webpack은 module bundler로서 많은 파일들을 webpack에 전달하면 webpack은 그 파일들을 완전히 호환이 되는 static 파일들로 변환해 준다.

#### 1. 설치 및 설정

- webpack과 터미널에서 webpack을 사용하기 위해 webpack-cli 패키지를 설치한다

```
$ npm install --save-dev webpack-cli
$ npm install --save-dev webpack
```

- webpack.config.js 파일을 생성한다.
- webpack.config.js는 모던 자바스크립트가 아니라서 모던 자바스크립트 문법을 사용할 수 없다(ex.import, export default xxx;)
- [webpack.config.js파일 참고](.webpack.config.js)
- webpack을 실행하게 되면 자동으로 webpack.config.js 파일을 찾는다.
- package.json의 scripts로 와서 start 명령을 변경한다.

```
  "scripts": {
    // start 를 dev:server로 변경 $ npm run dev:server로 실행
    "dev:server": "nodemon --exec babel-node init.js --delay 2",
    // $ npm run dev:assets 실행 시 webpack을 불러오도록 함
    "dev:assets": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

#### 2. entry 와 output

- entry : 파일들이 어디에서 왔는가
- output: 그걸 어디에 넣을 것인가

#### 3. path 패키지

- Node.js에는 파일과 디렉토리 경로는 절대경로로 만들어주는 방법이 있다. 즉 컴퓨터나 서버에서의 전체 경로를 갖게 된다.
- Node.js에 기본적으로 깔려있는 path 패키지를 이용한다.

<br><br>

## 2. loader

- webpack에서 사용할 모든 파일 형식들을 loader를 통해 webpack에게 알려주어야 함.
- css, 모던자바스크립트, png 등을 변환하기 위해서는 적절한 loader가 필요하다.

<br><br>

## 3. mode

- mode에는 development와 production이 있는데, production 모드에는 코드가 압축이 되고 development 모드에서는 에러 발생 시 어느 부분에서 일어난 건지 알 수 있어야 하기 때문에 코드가 압축되지 않는다.

---

### 참고

- [webpack.js](https://webpack.js.org)
- [JavaScript 모듈화 도구, webpack](https://d2.naver.com/helloworld/0239818)
