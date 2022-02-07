console.log("app.js inicializado");

const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
const birthday = require('./components/birthdays');
const sector = require('./components/sectorEmployees');
const extension = require('./components/extensions');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization", "Access-Control-Allow-Origin");
  next();
});

const employees = require('./database.json');


app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.post("/adduser", (req, res) => {
	const employee = req.body;
	fs.readFile('./database.json', (err, data) => {
		const list = JSON.parse(data);
		employee.id = list[list.length - 1].id + 1;
		list.push(employee);

		fs.writeFile('./database.json', JSON.stringify(list, null, 2), (err, result) => {
			console.log(err);
		});
	});
	res.json(1);
	return false;
});

app.get("/birthday", (req, res) => {
	const month = parseInt(req.query.month);
	let answer = birthday.getBirthdays(month, employees);
	res.send(answer);
});

app.get("/getsectors", (req, res) => {
	let list = [];
	employees.forEach((obj) => {
		let sector = obj.sector;
		if (!list.includes(sector)) {
			list.push(sector);
		}
	});
	res.json(list);
});

app.get("/sector", (req, res) => {
	let employeeSector = req.query.sector;
	employeeSector = employeeSector.toLowerCase();
	let answer = sector.getSectorEmployees(employeeSector, employees);
	res.json(answer);
});

app.get("/extensions", (req, res) => {
	let answer = extension.getExtensions([...employees]);
	res.json(answer);
});

app.get("/operation", (req, res) => {
	let op1 = parseInt(req.query.op1);
	let op2 = parseInt(req.query.op2);
	let operation = req.query.operation;
	let answer = 0;
	switch (operation) {
		case 'sum':
			answer = op1 + op2;
			break;
		case 'subtraction':
			answer = op1 - op2;
			break;
		case 'multiplication':
			answer = op1 * op2;
			break;
		case 'division':
			answer = op1 / op2;
			break;
	}
	console.log(answer);
	res.json(answer);
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));