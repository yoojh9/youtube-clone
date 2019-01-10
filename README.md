# youtube-clone

## 1. PassportJS

- [PassportJS](http://www.passportjs.org/)는 node.js 용 미들웨어로 사용자 인증을 구현시켜 준다
- 인증 쿠키를 생성하고 브라우저에 저장함

```
$ npm install passport
```


## 2. passport-local-mongoose
- [passport-local-mongoose](https://github.com/saintedlama/passport-local-mongoose)는 mongoose 플러그인으로 패스워드 로그인, 패스워드 변경, 패스워드 생성, 패스워드 암호화 등을 해준다

```
$ npm install passport-local-mongoose
```

---


## 3. strategy
strategy 란 로그인 방식을 의미한다.

#### 1. passport-local
- username과 password를 쓰는 사용자 인증 방식(strategy)를 의미한다
- [local strategy](http://www.passportjs.org/docs/username-password/)방식 사용 방법 참고
- 하지만 passport-local-mongoose 플러그인을 이용하면 위의 링크 대신 [User.createStrategy();](https://github.com/saintedlama/passport-local-mongoose#static-methods) 한 줄로 local strategy 방식을 설정할 수 있다.

```
$ npm install passport-local
```

### 참고
