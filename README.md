# youtube-clone

## 1. app.set(name, value)
- application의 config 값을 세팅할 수 있음
- [app.set(name, value)](https://expressjs.com/en/4x/api.html#app.set)
- 위의 링크를 통해 views property의 값이 디폴트로 '/views' 인 것은 알 수 있다. 때문에 루트 디렉토리에 views 디렉토리를 생성하고 뷰를 views 디렉토리 하위에 만들었다.


## 2. Pug
- Node.js에서 사용하는 템플릿 엔진
- $ npm install pug
- pug 엔진을 사용하기 위해 app.set("view engine", "pug"); 을 app.js에 추가한다.
- 추가로 controller에서 전달하는 응답을 res.render("home"); 과 같이 변경한다.
- 텍스트 내에 javascript를 추가하고 싶다면 #{new Date().getFullYear()} 처럼 추가하면 된다.


## 3. pug를 이용한 html 모듈화
- 공통 부분 (header나 footer)와 같은 내용은 layout으로 만들고, 다른 pug 페이지에서 extends 하여 사용한다.
- layout을 이용하면 같은 코드를 복사 붙여넣기 하지 않고 템플릿으로 이용할 수 있다.

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
- 탭으로 들여쓰기 한 태그는 하위 태그임을 의미한다.
- main.pug를 extends하여 block content를 override하면 block 하위의 내용을 변경할 수 있다. 
- main.pug 역시 include 하여 다른 pug 파일을 포함시킬 수 있다.
- 해당 프로젝트에서는 /partial/header.pug, /partial/footer.pug를 만들어 main.pug에서 include 하였다.


## 4. 모든 템플릿에서 공통으로 사용하는 변수 : res.locals
- [res.locals 레퍼런스](http://expressjs.com/ko/api.html#res.locals)
- 컨트롤러에 있는 정보를 뷰 템플릿에 추가할 수 있다.
- res.locals는 전역적으로 사용할 수 있는 변수를 추가하기 위해 사용하며 모든 템플릿, 뷰에서 사용 가능하다.
- view에 routes 객체나 그 외 데이터를 전달하기 위해 사용할 수 있다
- app.js에 app.use(localMiddleware); 로 middleware로 설정했고, middlewares.js에 localMiddleware()를 구현했다.
- 미들웨어에서 res.locals.siteName="weTube"; 와 같이 설정하면 템플릿에서는 #{siteName}과 같이 변수처럼 접근 가능하다.


## 5. 한 템플릿에서만 사용하는 변수
- controller에서 view render 시 object를 추가한다.
- render 함수의 첫번째 인자는 템플릿이고, 두번째 인자는 템플릿에 추가할 객체이다.
- res.render("home", {pageTitle : "Home"})
