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


# 실행 방법
- $ npm install
- $ npm start



---  
### 참고
