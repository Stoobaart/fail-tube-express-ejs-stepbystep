var videos = require("../models/video");

function indexVideos(req, res) {
	res.render("videos/index", { videos: videos });
}

function showVideos(req, res) {
	res.render("videos/show");
}

function newVideos(req, res) {
	res.render("videos/new");
}

function createVideos(req, res) {
	res.res("create");
}

function editVideos(req, res) {
	res.render("videos/edit");
}

function updateVideos(req, res) {
	res.send("update");
}

function deleteVideos(req, res) {
	res.send("delete");
}

module.exports = {
	index: indexVideos,
	show: showVideos,
	new: newVideos,
	create: createVideos,
	edit: editVideos,
	update: updateVideos,
	delete: deleteVideos
}