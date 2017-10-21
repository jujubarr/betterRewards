var express = require("express")
var app = express()
var path = require("path")
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./static")))

app.listen(8000, () => {
	console.log("Hailing frequenices open on port 8000")
})