import Button from '../../../Components/UI/CustomButton/CustomButton';

import useGetWordData from '../hooks/useGetWordData';

const GenerateWord = () => {
	const { word, isPending, isStarted, generateWordHandling } = useGetWordData();

	return (
		<>
			<Button onClick={generateWordHandling} disabled={isPending}>
				{isStarted ? 'Next' : 'Start'}
			</Button>
			{isStarted ? <h1>{word}</h1> : ''}
		</>
	);
};

export default GenerateWord;
