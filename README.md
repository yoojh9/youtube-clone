# youtube-clone

## 1. app.set(name, value)
- config 값을 세팅할 수 있음
- [app.set(name, value)](https://expressjs.com/en/4x/api.html#app.set)
- 위의 링크를 통해 views property의 값이 디폴트로 '/views' 인 것은 알 수 있다. 때문에 루트 디렉토리에 views 디렉토리를 생성하고 뷰를 views 디렉토리 하위에 만들었다.

## 2. Pug
- Node.js에서 사용하는 템플릿 엔진
- $ npm install pug
- pug 엔진을 사용하기 위해 app.set("view engine", "pug"); 을 app.js에 추가한다.
- 추가로 controller에서 전달하는 응답을 res.render("home"); 과 같이 변경한다.
- javascript를 추가하고 싶다면 #{new Date().getFullYear()} 처럼 추가하면 된다.

## 3. pug를 이용한 html 모듈화
- 공통 부분 (header나 footer)와 같은 내용은 layout으로 만들고, 다른 pug 페이지에서 extends 하여 사용한다.
- layouts/main.pug은 blue print의 역할을 하며 내용은 아래와 같다.

```
doctype html
html
    head
        title WeTube
    body
        main
            block content
        footer
            span &copy; WeTube
```

- main.pug를 extends하여  block content를 override하면 block 하위의 내용을 변경할 수 있다. 
- main.pug 역시 include 하여 다른 pug 파일을 포함시킬 수 있다.

## 4. res.locals - global config 설정
- view 마다 공통으로 가지고 있는 global config들을 설정할 수 있다.
- view에 routes 객체나 그 외 config 데이터를 전달하기 위해 사용.
- app.js에 app.use(localMiddleware); 로 middleware로 설정했고, middlewares.js에 localMiddleware()를 구현했다.

## 5. controller -> view 로 데이터 전달
- controller에서 view render 시 object를 추가한다.
- res.render("home", {pageTitle : "Home"})

# 실행 방법
- $ npm install
- $ npm start



---  
### 참고
