const branches = function getBranches(list) {
	list.sort(function (a, b) {
    	if(a.name < b.name) {
    		return -1;
    	}
    	if (a.name > b.name) {
    		return 1;
    	}
    	return 0;
    });
    onlyBranches = list.map((employee) => {
    	let object = {};
    	obj[employee.name] = employee.branch;
    	return object;
    });
    return onlyBranches;
};

module.exports = { getBranches: branches };