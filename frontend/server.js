const express = require('express');
const app = express();
const port = 80;
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('src'));


app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'));
	return false;
});

app.post("/adduser", (req, res) => {
	const employee = req.body;
	console.log(employee.name)
	fs.readFile('../backend/employees.json', (err, data) => {
		const list = JSON.parse(data);
		console.log(list[0]);
		list.push(employee);

		fs.writeFile('../backend/employees.json', JSON.stringify(list, null, 2), (err, result) => {
			console.log(err);
		});
	});
	return false;
});

app.listen(port);