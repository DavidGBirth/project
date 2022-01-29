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

let x = calc();
x.setOperand1(1);
x.setOperand2(10);
x.setOperation("sum");
console.log(x.getResult());