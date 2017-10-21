var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = {
	getAll: function(req, res) {
		User.find({})
		.then(users => {
			res.json(users);
		})
		.catch(errors => {
			console.log(errors)
		})
	},
	getOne: function(req, res) {
		User.find({_id: req.params.id})
		.then(user => {
			res.json(user)
		})
		.catch(errors => {
			console.log(errors)
			res.json()
		})
	},
	login: function(req, res) {
		User.find({email: req.body.email})
		.then(user => {
			if (user.password == req.body.password) {
				res.json(user)
			} else {
				res.status(500)
			}
		})
	}
}
