import axios from 'axios';

const getTranslation = async (word: string) => {
	const options = {
		method: 'GET',
		url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/get',
		params: {
			langpair: 'en|ukr',
			q: word,
			mt: '1',
			key: 'b790086f627249365713',
			onlyprivate: '0',
			de: 'a@b.c',
		},
		headers: {
			'X-RapidAPI-Key': '933c98fa7amshe2840a4a213dfadp15a53ajsn8629f35eaef5',
			'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com',
		},
	};

	return await axios
		.request(options)
		.then((response) => {
			return response.data.responseData.translatedText;
		})
		.catch((e) => {
			console.error(e);
		});
};
export default getTranslation;
