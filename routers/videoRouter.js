import express from "express";
import routes from "../routes";
import { 
    videos,  
    videoDetail, 
    deleteVideo, 
    editVideo, 
    getUpload,
    postUpload
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);   // uploadVideo middleware 추가
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo)

export default videoRouter;
