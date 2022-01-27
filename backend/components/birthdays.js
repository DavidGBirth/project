const birthdays = function getBirthdays(birthMonth, list) {
	const auxList = list.filter((employee) => {
		let wholedate = employee.birthDay.split("-");
		let month = parseInt(wholedate[1]);
		if (month === birthMonth) {
			return employee;
		}
	});
	return auxList;
};

module.exports = { getBirthdays: birthdays };