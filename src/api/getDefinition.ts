import axios from 'axios';
const getDefinition = async (word: string, errorHandle: () => void) => {
	const options = {
		method: 'GET',
		url: `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
	};

	const definition = await axios
		.request(options)
		.then((response: any) => {
			return response.data[0].meanings[0].definitions[0].definition;
		})
		.catch(function () {
			errorHandle();
		});
	return definition;
};

export default getDefinition;
