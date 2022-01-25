console.log("app.js inicializado");

const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
const birthday = require('./components/birthdays');
const sector = require('./components/sectorEmployees');
const branch = require('./components/branches');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//const cors = require('cors');

//app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE" // what matters here is that OPTIONS is present
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization", "Access-Control-Allow-Origin");
  next();
});

const employees = require('./employees.json');

/*app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});*/

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.post("/adduser", (req, res) => {
	const employee = req.body;
	console.log("Entrou na rota /adduser");
	fs.readFile('./employees.json', (err, data) => {
		const list = JSON.parse(data);
		employee.registerNumber = list[list.length - 1].registerNumber + 1;
		list.push(employee);

		fs.writeFile('./employees.json', JSON.stringify(list, null, 2), (err, result) => {
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

app.get("/branches", (req, res) => {
	let answer = branch.getBranches([...employees]);
	res.send(answer);
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));