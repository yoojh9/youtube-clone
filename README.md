# youtube-clone

## 1. Mongodb
- NoSQL 데이터베이스
- [MongoDB Download](https://www.mongodb.com/download-center/community)
- mongod.exe : server / mongos.exe : router / mongo.exe : client

- 윈도우의 경우 아래와 같이 설치한 mongodb 내 bin 폴더 하위의 mongod.exe를 실행시킨다.

```  
 $ cd C:\Program Files\MongoDB\Server\4.0\bin
 $ mongod
```

## 2. Mongoose
- Mongoose는 MongoDB 기반 ODM(Object Data Mapping) Node.js 전용 라이브러리이다. 
- ODM은 데이터베이스와 객체지향 프로그래밍 언어 사이에 호환되지 않는 데이터를 변환하는 프로그래밍 기법이다.
- 즉 MongoDB에 있는 데이터를 javascript 객체로 사용할 수 있게 해준다.
- $ npm install mongoose

---  
### 참고
- [windows에 mongoDB , mongodb compass 설치하기](https://blog.hanumoka.net/2018/10/18/mongodb-20181018-mongodb-install-at-windows/)
- [인코덤 - MongoDB 설치](http://www.incodom.kr/MongoDB_%EC%84%A4%EC%B9%98)
- [velopert - [Node.JS] 강좌 11편: Express와 Mongoose를 통해 MongoDB와 연동하여 RESTful API 만들기](https://velopert.com/594)
