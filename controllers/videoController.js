import {videos} from "../db"

export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos })
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

export const postUpload = (req, res) => {
    console.log(req.body)
}

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });

