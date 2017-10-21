var user = require('./../controllers/users');

module.exports = app => {
	app.get("/users",  user.getAll);
	app.get("/users/:id", user.getOne);
	app.post("/login", user.login);
}