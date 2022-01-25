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
    console.log(list);
    let onlyBranches = list.map((employee) => {
    	let object = {};
    	object.name = employee.name;
        object.branch = employee.branch;
    	return object;
    });
    console.log(onlyBranches);
    return onlyBranches;
};

module.exports = { getBranches: branches };