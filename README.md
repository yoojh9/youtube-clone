# youtube-clone

## 1. Webpack

- 코드의 양이 많아지면 코드의 유지와 보수가 쉽도록 코드를 모듈로 나누어 관리하는 모듈 시스템이 필요한데 javascript는 언어 자체가 지원하는 모듈 시스템이 없다. 이런 한계를 극복하기 위해 여러가지 도구를 활용하는데 그 도구 중에 하나가 webpack이다.
- webpack은 module bundler로서 많은 파일들을 webpack에 전달하면 webpack은 그 파일들을 완전히 호환이 되는 static 파일들로 변환해 준다.

#### 1. 설치 및 설정

- webpack과 터미널에서 webpack을 사용하기 위해 webpack-cli 패키지를 설치한다

```
$ npm i -g webpack webpack-cli && npm i -D webpack webpack-cli
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

## 2. mode

- mode에는 development와 production이 있는데, production 모드에는 코드가 압축이 되고 development 모드에서는 에러 발생 시 어느 부분에서 일어난 건지 알 수 있어야 하기 때문에 코드가 압축되지 않는다.
- package.json scripts에 아래와 같이 WEBPACK_ENV를 설정하면 webpack.config.js에서 process.env.WEBPACK_ENV로 값을 전달받을 수 있다

```
// package.json
  "scripts": {
    "dev:assets": "WEBPACK_ENV=development webpack",
    "build:assets": "WEBPACK_ENV=production webpack"
  }

// webpack.config.js
const MODE = process.env.WEBPACK_ENV;
```

<br><br>

## 3. loader

- webpack에서 사용할 모든 파일 형식들을 loader를 통해 webpack에게 알려주어야 함.
- css, 모던자바스크립트, png 등을 변환하기 위해서는 적절한 loader가 필요하다.
- scss일 포맷일 경우 scss를 확장자 파일을 찾아 css로 바꾸고, 전체 텍스트 중에 그 css의 텍스트를 추출하고, 추출된 css를 분리된 하나의 파일로 만든다.

```
$ npm install -D css-loader postcss-loader sass-loader
```

#### 1. extract-text-webpack-plugin

- 처리된 css를 style태그가 아닌 단일 css파일로 추출하기 위해 사용
- \$ npm install -D extract-text-webpack-plugin@next

#### 2. Autoprefixer

- postcss.loader와 autoprefixer를 함께 쓰면 브라우저 호환성에 맞는 css prefix를 자동으로 붙여준다
- [autoprefixer](https://github.com/postcss/autoprefixer)

```
// before
:fullscreen{
}

//after
:-webkit-:full-screen {
}
:-moz-:full-screen {
}
:full-screen {
}
```

- \$ npm install autoprefixer
- [option-browser:browserlist](https://github.com/browserslist/browserslist#queries)와 같은 option도 설정할 수 있다

```
{
    loader: "postcss-loader",
    options: {
        plugin() {
        return [autoprefixer({ browsers: "cover 99.5%" })];
        }
    }
}
```

<br><br>

## 4. sass

- 브라우저는 Sass의 문법을 알지 못하기 때문에 Sass(.scss) 파일을 css 파일로 컴파일(트랜스파일링)하여야 한다. 따라서 Sass 환경의 설치가 필요하다.
- Node.js 환경에서 사용하기 위해서는 node-sass를 설치하여야 한다.
- \$ npm install node-sass

---

### 참고

- [webpack.js](https://webpack.js.org)
- [Naver D2 - JavaScript 모듈화 도구, webpack](https://d2.naver.com/helloworld/0239818)
- [zerocho - 웹팩4(Webpack) 설정하기](https://www.zerocho.com/category/Webpack/post/58aa916d745ca90018e5301d)
- [zerocho - 웹팩4로 CSS와 기타 파일 번들링하기](https://www.zerocho.com/category/Webpack/post/58ac2d6f2e437800181c1657)
- [PostCSS](https://postcss.org)
- [autoprefixer](https://github.com/postcss/autoprefixer)
- [browserlist](https://github.com/browserslist/browserslist#queries)
