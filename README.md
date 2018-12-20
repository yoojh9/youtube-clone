# youtube-clone

## 1. Mongodb
- NoSQL 데이터베이스
- [MongoDB Download](https://www.mongodb.com/download-center/community)
- mongod.exe : server / mongos.exe : router / mongo.exe : client

#### 1. windows mongodb 설치
- 윈도우의 경우 아래와 같이 설치한 mongodb 내 bin 폴더 하위의 mongod.exe를 실행시킨다.

```  
 $ cd C:\Program Files\MongoDB\Server\4.0\bin
 $ mongod
```

#### 2. mac mongodb 설치
- [mac에 mongodb 설치하기](http://hong.adfeel.info/backend/mac%EC%97%90-mongodb-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0/)
- 위의 링크와 같이 설치한 후 수정한 .bash_profile을 적용한다  
```
$ . ~/.bash_profile
```

#### 3. mongodb 명령어
- mongodb에 저장된 model을 관리하기 위한 명령어
- $ cd /usr/local/mongodb/bin
- $ ./mongo

```  
> use we-tube // database 이름
switched to db we-tube
> show collections  // collection은 model과 같음
videos
> db.videos.remove({})
WriteResult({ "nRemoved" : 1 })
```


## 2. Mongoose
- Mongoose는 MongoDB 기반 ODM(Object Data Mapping) Node.js 전용 라이브러리이다. 
- ODM은 데이터베이스와 객체지향 프로그래밍 언어 사이에 호환되지 않는 데이터를 변환하는 프로그래밍 기법이다.
- 즉 MongoDB에 있는 데이터를 javascript 객체로 사용할 수 있게 해준다.
- $ npm install mongoose


## 3. dotenv
- dotenv를 통해 .env 파일 내 'key:value' 쌍으로 된 데이터들을 로드할 수 있음
- $ npm install dotenv
- js 파일 내에서 process.env.{key}와 같은 형태로 사용한다.
- .env에는 다음과 같이 작성한다.

```    
MONGO_URL="mongodb://localhost:27017/we-tube"
PORT = 4000
```  
- .gitignore에 등록되어 있으므로 .env 파일은 따로 github에 올라가있지 않으므로, 해당 프로젝트를 pull 받을 시에는 따로 .env를 등록해줘야 한다.




## 4. schema 설정
- models 디렉토리 하위에 스키마를 설정함
- schema 관련한 자세한 설명은 [mongoose 레퍼런스](https://mongoosejs.com/docs/guide.html) 참고
- Video와 Comment 모델은 서로 연결을 해주어야 되는데, Comment에 Video를 연결할 경우에는 Video의 ObjectId를 model에 추가하고 Video에 Comment를 연결할 경우 Comment는 여러개 일 수 있으므로 ObjectId의 array를 추가한다.

```  
// Comment.js에서 Video 모델을 연결
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    }
// Video.js에서 Comment 모델을 연결
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
``` 

## 5. async
- https://blueshw.github.io/2018/02/27/async-await/
- async를 이용하면 비동기 코드를 동기식으로 변경할 수 있음
- function 키워드 앞에 async만 붙여주면 되고 비동기로 처리되는 부분 앞에 await만 붙여주면 된다.

## 6. multer
- Multer는 파일 업로드를 위해 사용되는 multipart/form-data 를 다루기 위한 node.js 의 미들웨어이다.
- [Multer 레퍼런스](https://github.com/expressjs/multer/blob/master/doc/README-ko.md)
- $ npm install multer
- middleware.js에 const multerVideo = multer({dest: "uploads/videos/"}) 와 같이 적용하고
- app.js에서 '/upload'의 static 경로를 upload 디렉토리로 매핑시킨다. app.use("/uploads", express.static("uploads"))
- 추후에는 AWS S3와 연결할 예정

---  
### 참고
- [windows에 mongoDB , mongodb compass 설치하기](https://blog.hanumoka.net/2018/10/18/mongodb-20181018-mongodb-install-at-windows/)
- [인코덤 - MongoDB 설치](http://www.incodom.kr/MongoDB_%EC%84%A4%EC%B9%98)
- [mac에 mongodb 설치하기](http://hong.adfeel.info/backend/mac%EC%97%90-mongodb-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0/)
- [velopert - [Node.JS] 강좌 11편: Express와 Mongoose를 통해 MongoDB와 연동하여 RESTful API 만들기](https://velopert.com/594)
- [async, await를 사용하여 비동기 javascript를 동기식으로 만들자](https://blueshw.github.io/2018/02/27/async-await/)