const createWordAndDefinitionString = (word: string, definitions: string[]) => {
	let res = '';
	res = res.concat(word);
	res = res.concat('123456789');
	definitions.forEach((definition, id) => {
		if (id !== 0) {
			res = res.concat('987654321');
		}
		res = res.concat(definition);
	});
	return res;
};

export default createWordAndDefinitionString;
