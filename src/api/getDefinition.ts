import axios from 'axios';
const getDefinition = async (word: string, errorHandle: () => void) => {
	const options = {
		method: 'GET',
		url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
		params: { word },
		headers: {
			'X-RapidAPI-Key': '933c98fa7amshe2840a4a213dfadp15a53ajsn8629f35eaef5',
			'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com',
		},
	};

	const definition = await axios
		.request(options)
		.then((response: any) => {
			return response.data.definition;
		})
		.catch(function () {
			errorHandle();
		});
	return definition;
};

export default getDefinition;
