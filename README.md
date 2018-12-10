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
- babel은 다양한 작은 모듈들로 구성되어 있고, 다양한 모듈을 담는 일종의 상자 역할을 하며, 코드를 컴파일 하기 위해 작은 모듈(presets)을 사용한다.
- package.json 내의 start script를 "babel-node index.js"로 변경한다.

#### 5-1. babel presets
- 해당 프로젝트에서는 env preset을 사용한다. [babel presets](https://babeljs.io/docs/en/babel-preset-env)에는 여러 stage 별 presets이 있지만 babel-preset-env를 통해 모든 stage를 대체할 수 있다.
- $ npm install --save-dev @babel/preset-env

#### 5-2. .babelrc
- babel에게 어떠한 정보를 전달해주지 않는 이상 babel은 아무 작업도 수행하지 않는 상자에 불과하다
- 이 때문에 babel에게 설정 정보를 전달해주어야 하며, .babelrc 파일을 이용하여 전달할 수 있다.


# 실행 방법
- $ npm install
- $ npm start



---  
### 참고
- [Jbee - \(번역\)Babel에 대한 모든 것 ](https://jaeyeophan.github.io/2017/05/16/Everything-about-babel/)