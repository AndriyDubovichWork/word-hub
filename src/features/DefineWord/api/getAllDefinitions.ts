import axios from 'axios';
import DefinitionT from '../types/DefinitionT';

type responseT = {
	data: {
		list: DefinitionT[];
	};
};

const getAllDefinitions = async (word: string) => {
	const options = {
		method: 'GET',
		url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
		params: { term: word },
		headers: {
			'X-RapidAPI-Key': '933c98fa7amshe2840a4a213dfadp15a53ajsn8629f35eaef5',
			'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com',
		},
	};

	const definition = await axios
		.request(options)
		.then((response: responseT) => {
			return response.data.list;
		})
		.catch((error) => {
			throw new Error(error);
		});
	return definition;
};

export default getAllDefinitions;
