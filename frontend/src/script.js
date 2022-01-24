function register() {
	const employee = {};
	employee.registerNumber = parseInt(document.getElementById("regnumber").value);
	employee.name = document.getElementById("name").value;
	employee.branch = document.getElementById("branch").value;
	employee.email = document.getElementById("email").value;
	employee.sector = document.getElementById("sector").value;
	employee.birthdate = document.getElementById("birthdate").value;
	//let wrapper = [];
	//wrapper.push(employee);
	console.log(employee);
	request = {
		method: 'POST',
		body: JSON.stringify(employee),
		headers: {
			'Content-Type': 'application/json'
		}
	}
	fetch("/adduser", request)
	.then(console.log("O usuário foi adicionado"));
	const inputs = document.querySelectorAll("input");
	inputs.forEach((obj) => {
		obj.value = "";
	});
}