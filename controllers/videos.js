function indexVideos(req, res) {
	res.send("index");
}

function showVideos(req, res) {
	res.send("show");
}

function newVideos(req, res) {
	res.send("new");
}

function createVideos(req, res) {
	res.send("create");
}

function editVideos(req, res) {
	res.send("edit");
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