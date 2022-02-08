const url = "localhost";

function resizeIFrameToFitContent() {
	const iframe = document.getElementById("principal");
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}

/*window.addEventListener('DOMContentLoaded', function(e) {

    var iFrame = document.getElementById("principal");
    resizeIFrameToFitContent( iFrame );

    // or, to resize all iframes:
    var iframes = document.querySelectorAll("iframe");
    for( var i = 0; i < iframes.length; i++) {
        resizeIFrameToFitContent( iframes[i] );
    }
} );*/

function register() {
	const employee = {};
	employee.id = 0;
	employee.name = document.getElementById("name").value;
	employee.email = document.getElementById("email").value;
	employee.extension = document.getElementById("extension").value;
	employee.birthDay = document.getElementById("birthdate").value;
	employee.sector = document.getElementById("sector").value;
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
	fetch(`http://${url}:8080/adduser`, options)
	.then(res => res.json())
  	.then(response => console.log('Success: ', response))
  	.catch(error => console.error('Error: ', error));
	const inputs = document.querySelectorAll("input");
	inputs.forEach((obj) => {
		obj.value = "";
	});
	document.querySelector("p").innerHTML = "Usuário adicionado com sucesso"

}

function birthdays() {
	const calendar = {
		"1": "Janeiro",
		"2": "Fevereiro",
		"3": "Março",
		"4": "Abril",
		"5": "Maio",
		"6": "Junho",
		"7": "Julho",
		"8": "Agosto",
		"9": "Setembro",
		"10": "Outubro",
		"11": "Novembro",
		"12": "Dezembro"
	}
	const month = parseInt(document.getElementById("month").value);

	function printBirthdays(list) {
		let div = document.createElement("div");
		div.className = "result";
		let h2 = document.createElement("h2");
		h2.innerHTML = `Lista de Aniversariantes de ${calendar[month.toString()]}`;
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

	fetch(`http://${url}:8080/birthday?month=${month}`)
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

function fillSelect() {
	fetch(`http://${url}:8080/getsectors`)
	.then(res => res.json())
	.then(sectors => {
		sectors.sort(function(a, b){
	    if(a < b) { return -1; }
	    if(a > b) { return 1; }
	    return 0;
	});
	options = sectors.map(function (obj) {
		return `<option value="${obj}">${obj}</option>`
	});
	let x = document.getElementById("sectors");
	x.innerHTML = options;
	});
}

function sectors() {
	function printSectors(list) {
		let div = document.createElement("div");
		div.className = "result";
		let h2 = document.createElement("h2");
		h2.innerHTML = `Lista de Funcionários do Setor de ${value}`;
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

	let select = document.getElementById("sectors");
	let value = select.options[select.selectedIndex].text;
	fetch(`http://${url}:8080/sector?sector=${value}`)
	.then(response => response.json())
	.then(employees => {
		let x = document.querySelector(".result");
		if (x) {
			x.remove();
		}
		let result = printSectors(employees);
		let body = document.querySelector("body");
		body.append(result);
	});
}

function fillExtensions() {
	fetch(`http://${url}:8080/extensions`)
	.then(res => res.json())
	.then(extensions => {
		extensions.sort(function(a, b){
			if(a.name < b.name) { return -1; }
			if(a.name > b.name) { return 1; }
			return 0;
		});
		let x = document.querySelector("thead");
		let header = "<tr><th>#</th><th>Nome</th><th>Ramal</th></tr>";
		x.innerHTML = header;
		let y = document.querySelector("tbody");
		let rows = extensions.map((obj, index) => {
			return `<tr><td>${index + 1}</td><td>${obj.name}</td><td>${obj.extension}</td></tr>`;
		});
		y.innerHTML = rows.join("");
	});
	let table = document.querySelector("table");
	table.className = "tableContent";
	const iframe = document.getElementById("principal");
	iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}