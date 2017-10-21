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
		.catch(errors =>
			res.json()
		)
	},
	create: function(req, res) {
		var user = new User(req.body);
		user.save()
		.then(() => {
			console.log("successfully created a user");
			res.json(true);
		})
		.catch(errors => { 
			console.log(errors)
		});
	},
	delete: function(req, res){
		User.remove({_id: req.params.id}, function(errors, results){
			if(errors) {
				console.log(errors);
				res.status(500).json(errors);
			} else {
				console.log('Deleted');
				res.json(true);
			}
		})
	}

}
