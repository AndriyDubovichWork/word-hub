import axios from 'axios';

const Translate = async (word: string, errorHandler: () => void) => {
	const options = {
		method: 'POST',
		url: 'https://rapid-translate-multi-traduction.p.rapidapi.com/t',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': '933c98fa7amshe2840a4a213dfadp15a53ajsn8629f35eaef5',
			'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com',
		},
		data: `{"from":"en","to":"uk","e":"","q":"${word}"}`,
	};

	return await axios
		.request(options)
		.then(function (response) {
			return response.data[0];
		})
		.catch(function () {
			errorHandler();
		});
};
export default Translate;
