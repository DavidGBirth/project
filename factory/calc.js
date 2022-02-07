function calc() {
	return {
		operand1: 0,
	    operand2: 0,
	    operator: "",
		setOperand1(__operand1) {
			operand1 = __operand1;
		},

		setOperand2(__operand2) {
			operand2 = __operand2;
		},

		setOperation(__operation) {
			operation = __operation;
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

numbers.forEach((number) => {
	number.addEventListener('click', function () {
		let digit = number.value;
		if (digit === "equal" && !first) {
			let value2 = parseInt(visor.innerHTML);
			calculator.setOperand2(value2);
			visor.innerHTML = calculator.getResult();
			calculator.clearCalculator();
		} else if (calculator.operation == null && !first) {
			first = true;
			visor.innerHTML = digit;
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
			visor.innerHTML = "";
			first = false;
		}
	});
});