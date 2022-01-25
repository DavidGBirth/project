const url = "207.246.83.183";

function register() {
	const employee = {};
	employee.registerNumber = 0;
	employee.name = document.getElementById("name").value;
	employee.branch = parseInt(document.getElementById("branch").value);
	employee.email = document.getElementById("email").value;
	employee.sector = document.getElementById("sector").value;
	employee.birthdate = document.getElementById("birthdate").value;
	console.log(employee);
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
	function printBirthdays(list) {
		let div = document.createElement("div");
		div.className = "result";
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
		return div;
	}

	const month = parseInt(document.getElementById("month").value);
	fetch(`http://${url}:3000/birthday?month=${month}`)
	.then(response => response.json())
	.then(employees => {
		let x = document.querySelector(".result");
		if (x) {
			x.remove();
		}
		let result = printBirthdays(employees);
		let body = document.querySelector("body");
		body.append(result);
	});
}