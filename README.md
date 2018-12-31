# youtube-clone

## 1. SASS

- selector를 father요소 안에 넣을 수 있음.
- 예를 들어 기존 css 작성 시 .header.header\_\_wrapper{}라고 작성했다면, sass를 이용하면 .header{.header\_\_wrapper{}}로 작성한다.
- 또한 .header\_\_column:last-child{} 로 작성했던 것을 .header\_\_column{ &:last-child{}} 로 작성할 수 있다.
- 더 명확하고 보기 좋은 코딩을 가능하게 한다.
- [header.scss참고](https://github.com/yoojh9/youtube-clone/blob/styling/assets/scss/partials/header.scss)

---

### 참고
