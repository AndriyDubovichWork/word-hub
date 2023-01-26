import axios from 'axios';

const Translate = async (word: string, errorHandler: () => void) => {
	const options = {
		method: 'GET',
		url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/get',
		params: { langpair: 'en|ukr', q: word, mt: '1', onlyprivate: '0', de: 'a@b.c' },
		headers: {
			'X-RapidAPI-Key': '933c98fa7amshe2840a4a213dfadp15a53ajsn8629f35eaef5',
			'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com',
		},
	};

	return await axios
		.request(options)
		.then(function (response) {
			console.log(response);

			return response.data.responseData.translatedText;
		})
		.catch(function () {
			errorHandler();
		});
};
export default Translate;
