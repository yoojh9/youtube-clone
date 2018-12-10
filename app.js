import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { userRouter } from "./router";  // 마지막에 export default 로 export 하지 않았으므로 다음과 같이 import 가능

const app = express();

const handleHome = (req, res) =>  res.send('hello from home');

const handleProfile = (req, res) => res.send("you are on my profile");

app.use(morgan("dev"));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", handleHome); 
app.get("/profile", handleProfile);

app.use("/user", userRouter);   // 해당 router를 모두 이용하겠다.

export default app;
