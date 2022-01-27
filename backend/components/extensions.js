const extensions = function getExtensions(list) {
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
    let onlyExtensions = list.map((employee) => {
    	let object = {};
    	object.name = employee.name;
        object.extension = employee.extension;
    	return object;
    });
    console.log(onlyExtensions);
    return onlyExtensions;
};

module.exports = { getExtensions: extensions };