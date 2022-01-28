class Calculadora {

	constructor() {
		this.operand1 = null;
		this.operand2 = null;
		this.operation = null;
	}

	setOperand1(__operand1) {
		this.operand1 = __operand1;
	}

	setOperand2(__operand2) {
		this.operand2 = __operand2;
	}

	setOperation(__operation) {
		this.operation = __operation;
	}

	getResult() {
		switch (this.operation) {
			case 'sum':
				return this.operand1 + this.operand2;
				break;
			case 'subtraction':
				return this.operand1 - this.operand2;
				break;
			case 'multiplication':
				return this.operand1 * this.operand2;
				break;
			case 'division':
				return this.operand1 / this.operand2;
				break;
		}
	}

	clearCalculator() {
		this.operand1 = null;
		this.operand2 = null;
		this.operation = null;
	}
}


let numbers = document.querySelectorAll(".numbers button");
let ops = document.querySelectorAll(".symbols button");
let visor = document.querySelector(".visor span");
let calc = new Calculadora();
let first = true

numbers.forEach((number) => {
	number.addEventListener('click', function () {
		let digit = number.value;
		if (digit === "equal" && !first) {
			let value2 = parseInt(visor.innerHTML);
			calc.setOperand2(value2);
			visor.innerHTML = calc.getResult();
			calc.clearCalculator();
		} else if (calc.operation == null && !first) {
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
			calc.setOperand1(value1);
			calc.setOperation(op.value);
			visor.innerHTML = "";
			first = false;
		}
	});
});