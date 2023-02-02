import axios from 'axios';

const getTranslation = async (word: string | string[]) => {
	const req = typeof word === 'string' ? word : word.toString();
	const options = {
		method: 'GET',
		url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/get',
		params: { langpair: 'en|ukr', q: req, mt: '1', onlyprivate: '1', de: 'a@b.c' },
		headers: {
			'X-RapidAPI-Key': '933c98fa7amshe2840a4a213dfadp15a53ajsn8629f35eaef5',
			'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com',
		},
	};

	return await axios
		.request(options)
		.then((response) => {
			return response.data[0].translatedText;
		})
		.catch((error) => {
			throw new Error(error);
		});
};
export default getTranslation;
