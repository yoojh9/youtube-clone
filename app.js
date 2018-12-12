import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";
import { localMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";

const app = express();      // execute express

app.set("view engine", "pug");

// middlewares
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); 
app.use(routes.videos, videoRouter); 

export default app;
