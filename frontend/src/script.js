function register() {
	const employee = {};
	employee.registerNumber = document.getElementById("regnumber").value;
	employee.name = document.getElementById("name").value;
	employee.branch = document.getElementById("branch").value;
	employee.email = document.getElementById("email").value;
	employee.sector = document.getElementById("sector").value;
	employee.birthdate = document.getElementById("birthdate").value;
	//let wrapper = [];
	//wrapper.push(employee);
	console.log(employee);
	request = {
		body: JSON.stringify(employee),
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	}
	fetch("/adduser", request)
	.then(resposta => resposta.json())
	.then(answer => {
		console.log(answer);
	});
}