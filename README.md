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
- modern javascript 코드를 normal javascript로 변경해줌
- $ npm install @babel/node
- $ npm install @babel/core
- babel은 다양한 작은 모듈들로 구성되어 있고, 다양한 모듈을 담는 일종의 상자 역할을 하며, 코드를 컴파일 하기 위해 작은 모듈(presets)을 사용한다.
- package.json 내의 start script를 "babel-node index.js"로 변경한다.

#### 5-1. babel presets
- 해당 프로젝트에서는 env preset을 사용한다. [babel presets](https://babeljs.io/docs/en/babel-preset-env)에는 여러 stage 별 presets이 있지만 babel-preset-env를 통해 모든 stage를 대체할 수 있다.
- $ npm install @babel/preset-env

#### 5-2. .babelrc
- babel에게 어떠한 정보를 전달해주지 않는 이상 babel은 아무 작업도 수행하지 않는 상자에 불과하다
- 이 때문에 babel에게 설정 정보를 전달해주어야 하며, .babelrc 파일을 이용하여 전달할 수 있다.

## 6. dependencies vs devDependencies
- dependencies: 프로젝트가 run 되기 위해 필요한 것. project needs
- devDependencies : 프로젝트가 실행되는 것과는 관계 없이 개발 시 필요. programmer needs ( $ npm install nodemon -D )

## 7. nodemon
- nodemon을 사용하게 되면 변경 사항이 있을 때 마다 자동으로 restart 됨.
- "start": "nodemon --exec babel-node index.js" 해당 스크립트를 이용할 경우, 저장 시 서버가 2번 start 된다. 이유는 일단 start 된 후 babel-node를 실행하게 되는데, bebel-node를 실행하게 되면 코드가 변경되므로 restart 되게 된다.
- "start": "nodemon --exec babel-node index.js --delay 2" 와 같이 delay를 주어, babel이 수행하는 transformation이 끝나도록 기다린다. 

## 8. express core : Middlewares
- express 프레임워크의 핵심 기술 중 하나로, 이름처럼 요청에 대한 응답 과정 중간에 껴서 어떤 동작을 해주는 프로그램이다.
- express는 요청이 들어올 때 그에 따른 응답을 보내는데 응답을 보내기 전에 미들웨어가 지정한 동작을 수행한다.

# 실행 방법
- $ npm install
- $ npm start



---  
### 참고
- [Jbee - \(번역\)Babel에 대한 모든 것 ](https://jaeyeophan.github.io/2017/05/16/Everything-about-babel/)