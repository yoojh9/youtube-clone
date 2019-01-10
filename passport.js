import passport from "passport";
import User from "models/User";

// 사용할 strategy 입력
passport.use(User.createStrategy());