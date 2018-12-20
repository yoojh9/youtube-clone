import routes from "../routes";
import Video from "../models/Video";

export const home = async(req, res) => {
    try {
        const videos = await Video.find({}); // find all videos
        console.log(videos);
        res.render("home", { pageTitle: "Home", videos });
    } catch(error){
        console.error(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
};

export const search = (req, res) => {
    // const searchingBy = req.query.term;
    // ES6 문법
    const {
        query: { term : searchingBy}
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy, videos });
    // searchingBy: searchingBy 와 같이 property 이름과 변수 이름이 같을 경우 searchingBy 하나로 표현
}
export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });

export const postUpload = async(req, res) => {
    const { 
        body : { title, description },
        file: { path } 
    } = req;

    // To Do: Upload and save video
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
}

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });

