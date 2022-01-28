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