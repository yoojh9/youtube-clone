import express from "express";
import routes from "../routes";
import { 
    videos, 
    upload, 
    VideoDetail, 
    deleteVideo, 
    editVideo 
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, VideoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo)

export default videoRouter;
