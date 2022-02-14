exports.getParams = (params) => {
	const paramsObj = {};
	for (const entry of params.entries()) {
		const value = entry[1];
		paramsObj[value[0]] = value[1];
	}

	return paramsObj;
};
