//import fetch from "node-fetch";

console.log("server.js inicializado");

const express = require('express');
const app = express();
const port = 80;
const fs = require('fs');
const path = require('path');
/*const bodyParser = require('body-parser');
const fetch = require('node-fetch');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());*/


/*app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});*/

app.use(express.static('src'));


app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'));
	return false;
});

/*app.post("/adduser", (req, res) => {
	
	url = "localhost:8080/adduser";
	request = {
		method: 'POST',
		body: req.body,
		headers: {
			'Content-Type': 'application/json'
		}
	}
	fetch(url, request)
	.then(console.log("Enviado para o Back"));
	return false;
});*/

app.listen(port, () => console.log(`Server listening on port: ${port}`));