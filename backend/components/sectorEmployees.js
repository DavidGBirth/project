const sectorEmployees = function getSectorEmployees(sector, list) {
	const auxList = list.filter((employee) => {
		if (employee.sector.toLowerCase() === sector) {
			return employee;
		}
	});
	return auxList;
};

module.exports = { getSectorEmployees: sectorEmployees };