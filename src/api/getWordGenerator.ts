import axios from 'axios';

const Generateword = async (type: string) => {
	const options = {
		method: 'GET',
		url: 'https://random-word-by-api-ninjas.p.rapidapi.com/v1/randomword',
		params: { type },
		headers: {
			'X-RapidAPI-Key': '933c98fa7amshe2840a4a213dfadp15a53ajsn8629f35eaef5',
			'X-RapidAPI-Host': 'random-word-by-api-ninjas.p.rapidapi.com',
		},
	};
	return await axios
		.request(options)
		.then((res) => {
			return res.data.word;
		})
		.catch((e) => {
			console.error(e);
		});
};

export default Generateword;
