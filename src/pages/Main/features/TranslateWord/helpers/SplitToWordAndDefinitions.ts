const SplitToWordAndDefinitions = (createWordAndDefinition: string) => {
	const word = createWordAndDefinition.split('123456789')[0];
	const definitions = createWordAndDefinition.split('123456789')[1].split('123456789');
	return { word, definitions };
};

export default SplitToWordAndDefinitions;
