var mongoose = require("mongoose")

var UserSchema = new mongoose.Schema({
	email: String,
	password: String,
	cards:[{name: String}]
})

var User = mongoose.model("User", UserSchema);