# youtube-clone

## 1. SASS

- selector를 father요소 안에 넣을 수 있음.
- 예를 들어 기존 css 작성 시 .header.header\_\_wrapper{}라고 작성했다면, sass를 이용하면 .header{.header\_\_wrapper{}}로 작성한다.
- 또한 .header\_\_column:last-child{} 로 작성했던 것을 .header\_\_column{ &:last-child{}} 로 작성할 수 있다.
- 더 명확하고 보기 좋은 코딩을 가능하게 한다.
- [header.scss참고](https://github.com/yoojh9/youtube-clone/blob/styling/assets/scss/partials/header.scss)

## 2. nodemon ignore 옵션 추가

- scss 변경 사항이 있을 때마다 서버가 재시작되므로 package.json 내 scripts에 dev:server 부분에 ignore 옵션을 추가한다 "--ignore ['assets/*.scss', 'static/styles.css']"
- 노마드코더는 "--ignore 'scss'"로 작성했는데 styles.css가 변경되도 서버가 재시작하는 것 같아 styles.css도 ignore 옵션으로 추가했다.

---

### 참고
