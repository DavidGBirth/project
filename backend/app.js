const express = require('express');
const app = express();
const fs = require('fs');
const port = 80;
const birthday = require('./components/birthdays');
const sector = require('./components/sectorEmployees');
const branch = require('./components/branches');

const employees = require('./employees.json');

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