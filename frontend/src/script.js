function register() {
	const employee = {};
	employee.registerNumber = 0;
	employee.name = document.getElementById("name").value;
	employee.branch = parseInt(document.getElementById("branch").value);
	employee.email = document.getElementById("email").value;
	employee.sector = document.getElementById("sector").value;
	employee.birthdate = document.getElementById("birthdate").value;
	//let wrapper = [];
	//wrapper.push(employee);
	let request = {
		method: 'POST',
		mode: 'cors',
		body: JSON.stringify(employee),
		headers: {
			'Content-Type': 'application/json',
		}
	}
	fetch("http://localhost:8080/adduser", request)
	.then(console.log("O usuário foi adicionado"));
	const inputs = document.querySelectorAll("input");
	inputs.forEach((obj) => {
		obj.value = "";
	});
}