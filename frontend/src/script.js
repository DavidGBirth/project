const url = "207.246.83.183"

function register() {
	const employee = {};
	employee.registerNumber = 0;
	employee.name = document.getElementById("name").value;
	employee.branch = parseInt(document.getElementById("branch").value);
	employee.email = document.getElementById("email").value;
	employee.sector = document.getElementById("sector").value;
	employee.birthdate = document.getElementById("birthdate").value;
	let options = {
		method: 'POST',
		body: JSON.stringify(employee),
		cache: 'no-cache',
    	credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		}
	};
	fetch(`http://${url}:3000/adduser`, options)
	.then(res => res.json())
  	.then(response => console.log('Success: ', response))
  	.catch(error => console.error('Error: ', error));
	const inputs = document.querySelectorAll("input");
	inputs.forEach((obj) => {
		obj.value = "";
	});
}

function birthdays() {
	const month = parseInt(document.getElementById("month").value);
	fetch(`http://${url}:3000/birthday?month=${month}`)
	.then(response => response.json())
	.then(employees => {
		console.log(employees.length);
		console.log(employees[0]);
		console.log(employees[1]);
		//printBirthdays(employees);
	});

	function printBirthdays(list) {
		let div = document.createElement("div");
		let h2 = document.createElement("h2");
		h2.innerHTML = "Lista de Aniversariantes de";
		div.append(h2);
		let ul = document.createElement("ul");
		list.forEach((obj) => {
			let li = document.createElement("li");
			li.textContent = obj.name;
			ul.append(li);
		});
		div.append(ul);
	}
}