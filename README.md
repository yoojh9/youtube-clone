# youtube-clone

## 1. npm
- node package manager
- node.js를 설치 시 자동으로 설치 됨
- $npm init  명령어로 프로젝트에 npm 패키지 매니저를 사용하도록 설정
- npm init으로 package.json이 생성된다.

## 2. express 
- node.js를 이용하여 웹서버를 구축하기 위해 사용하는 프레임워크
- 매우 안정적임
- $npm install express

## 3. .gitignore
- [node.js를 위한 gitignore 정보](https://github.com/github/gitignore/blob/master/Node.gitignore)
- package-lock.json 도 추가함

## 4. require()
- const express = require('express')
- node_modules 내에 express 모듈을 사용하겠다.

## 5. babel
- 최신의 modern javascript 코드를 normal javascript로 변경해줌
- babel은 많은 loader가 있고, 그 중 이 프로젝트에서는 babel-node를 사용한다
- $ npm install @babel/node
- $ npm install @babel/core
- babel은 다양한 작은 모듈들로 구성되어 있고, 다양한 모듈을 담는 일종의 상자 역할을 하며, 코드를 컴파일 하기 위해 작은 모듈(presets)을 사용한다.
- package.json 내의 start script를 "babel-node index.js"로 변경한다.

#### 5-1. babel presets
- 해당 프로젝트에서는 env preset을 사용한다. [babel presets](https://babeljs.io/docs/en/babel-preset-env)
- $ npm install @babel/preset-env

#### 5-2. .babelrc
- babel에게 어떠한 정보를 전달해주지 않는 이상 babel은 아무 작업도 수행하지 않는 상자에 불과하다
- 이 때문에 babel에게 설정 정보를 전달해주어야 하며, .babelrc 파일을 이용하여 전달할 수 있다.

## 6. dependencies vs devDependencies
- dependencies: 프로젝트가 실행되기 위해 필요한 것.
- devDependencies : 개발자에게 필요한, 조금 더 개발을 편하게 해주는 것 ( $ npm install nodemon -D )

## 7. nodemon
- nodemon을 사용하게 되면 변경 사항이 있을 때 마다 자동으로 restart 됨.
- "start": "nodemon --exec babel-node index.js" 해당 스크립트를 이용할 경우, 저장 시 서버가 2번 start 된다. 이유는 일단 start 된 후 babel-node를 실행하게 되는데, bebel-node를 실행하게 되면 코드가 변경되므로 restart 되게 된다.
- "start": "nodemon --exec babel-node index.js --delay 2" 와 같이 delay를 주어, babel이 코드 변환을 끝날 때 까지 기다릴 수 있다.

## 8. express core : Middlewares
- express 프레임워크의 핵심 기술 중 하나로, 이름처럼 요청에 대한 응답 과정 중간에 껴서 어떤 동작을 해주는 프로그램이다.
- express는 요청이 들어올 때 그에 따른 응답을 보내는데 응답을 보내기 전에 미들웨어가 지정한 동작을 수행한다.
- express의 모든 함수가 미들웨어가 될 수 있다.
- 미들웨어는 next()를 사용하여 다음 미들웨어나 라우트의 핸들러로 요청을 전달해야한다.
- next()로 다음 함수에 요청을 보내지 않고, res.send()를 호출하면 다음 함수로의 연결을 끊을 수 있다.

#### 8-1. morgan
- logging 관련 미들웨어
- $ npm install morgan

#### 8-2. helmet
- Helmet을 이용하면 HTTP 헤더를 적절히 설정하여 몇 가지 잘 알려진 웹 취약성으로부터 앱을 보호할 수 있다.
- node.js 앱의 보안에 도움이 된다.
- $ npm install helmet

#### 8-3. cookie-parser
- Cookie 헤더를 파싱하고 req.cookie에 쿠키 이름으로 된 키로 객체를 생성한다.
- $ npm install cookie-parser

#### 8-4. body-parser
- 클라이언트 POST request data의 body로부터 파라미터를 편리하게 추출
- $ npm install body-parser
- 하지만 body-parser는 express 4.16.0 릴리즈 이후로 express 내에 추가되었으므로, bodyParser.json()을 이용하기보다는 express.json()을 사용하길 권장한다.
- [express 관련 document](https://expressjs.com/en/4x/api.html#express.json)

# 실행 방법
- $ npm install
- $ npm start



---  
### 참고
- [Jbee - \(번역\)Babel에 대한 모든 것 ](https://jaeyeophan.github.io/2017/05/16/Everything-about-babel/)