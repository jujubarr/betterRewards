var mongoose = require("mongoose")
var fs = require("fs")
var path = require("path")

mongoose.connect('mongodb://localhost/betterRewards')

var model_paths = path.join(__dirname, './../models')

fs.readdirSync(model_paths).forEach(file => {
	if (file.indexOf('.js') >= 0) {
		require(model_paths + "/" + file);
	}
})