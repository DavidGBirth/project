console.log("app.js inicializado");

const express = require('express');
const app = express();
const fs = require('fs');
const port = 8080;
const birthday = require('./components/birthdays');
const sector = require('./components/sectorEmployees');
const branch = require('./components/branches');
//const cors = require('cors');

//app.use(cors());

const employees = require('./employees.json');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get("/")

app.post("/adduser", (req, res) => {
	const employee = req.body;
	fs.readFile('../backend/employees.json', (err, data) => {
		const list = JSON.parse(data);
		employee.registerNumber = list[list.length - 1].registerNumber + 1;
		list.push(employee);

		fs.writeFile('./employees.json', JSON.stringify(list, null, 2), (err, result) => {
			console.log(err);
		});
	});
	console.log("Usuário adicionando [Back]");
	return false;
});

app.get("/birthday", (req, res) => {
	const month = req.query.month;
	let answer = birthday.getBirtdays(month, employees);
	res.send(answer);
});

app.get("/sector", (req, res) => {
	let employeeSector = req.query.sector;
	employeeSector = employeeSector.toLowerCase();
	let answer = sector.getSectorEmployees(employeeSector, employees);
	res.send(answer);
});

app.get("/branches", (req, res) => {
	let answer = branch.getBranches([...employees]);
	res.send(answer);
});

app.listen(port);