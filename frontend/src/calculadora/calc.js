function calc() {
	return {
		operand1: 0,
	    operand2: 0,
	    operation: "",
		setOperand1(__operand1) {
			operand1 = __operand1;
		},

		getOperand1() {
			return operand1;
		},

		setOperand2(__operand2) {
			operand2 = __operand2;
		},

		getOperand2() {
			return operand2;
		},

		setOperation(__operation) {
			operation = __operation;
		},

		getOperation() {
			return operation;
		},

		getResult() {
			switch (operation) {
				case 'sum':
					return operand1 + operand2;
					break;
				case 'subtraction':
					return operand1 - operand2;
					break;
				case 'multiplication':
					return operand1 * operand2;
					break;
				case 'division':
					return operand1 / operand2;
					break;
			}
		},

		clearCalculator() {
			operand1 = 0;
			operand2 = 0;
			operation = "";
		}
	};
}

let numbers = document.querySelectorAll(".numbers button");
let ops = document.querySelectorAll(".symbols button");
let visor = document.querySelector(".visor span");
let calculator = calc();
let first = true
let new_op = false;

numbers.forEach((number) => {
	number.addEventListener('click', function () {
		let digit = number.value;
		if (digit === "equal" && !first) {
			let value2 = parseInt(visor.innerHTML);
			calculator.setOperand2(value2);
			fetch(`http://45.76.15.116:3000/operation?op1=${calculator.getOperand1()}&op2=${calculator.getOperand2()}&operator=${calculator.getOperation()}`)
			.then(resposta => resposta.text())
			.then(response => {
				visor.innerHTML = response;
			});
			calculator.clearCalculator();
			first = true;
			new_op = true;
		} else if (new_op) {
			console.log("Entrou");
			visor.innerHTML = digit;
			new_op = false;
		} else if (digit != "equal") {
			visor.innerHTML += digit;
		}
	});
});

ops.forEach((op) => {
	op.addEventListener('click', function () {
		if (visor.innerHTML && first) {
			let value1 = parseInt(visor.innerHTML);
			calculator.setOperand1(value1);
			calculator.setOperation(op.value);
			//console.log(calculator.getOperand1());
			visor.innerHTML = "";
			first = false;
		}
	});
});