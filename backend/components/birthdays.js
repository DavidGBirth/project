const birthdays = function getBirthdays(birthMonth, list) {
	const auxList = list.filter((employee) => {
		let wholedate = employee.birthdate.split("-");
		let month = parseInt(wholedate[1]);
		if (month === (birthMonth - 1)) {
			return employee;
		}
	});
	return auxList;
};

module.exports = { getBirthdays: birthdays };