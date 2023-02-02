const createWordAndDefinitionArray = (word: string, definitions: string[]) => {
	const WordAndDefinitionArray = [word];
	definitions.forEach((definition) => {
		WordAndDefinitionArray.push(definition);
	});
	return WordAndDefinitionArray;
};

export default createWordAndDefinitionArray;
