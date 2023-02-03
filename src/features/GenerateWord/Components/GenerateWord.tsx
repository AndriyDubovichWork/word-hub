import Button from '../../../Components/UI/CustomButton/CustomButton';

import useGetWordData from '../hooks/useGetWordData';

const GenerateWord = () => {
	const { word, isPending, isStarted, generateWordHandling } = useGetWordData();

	return (
		<>
			{isStarted ? <h1>{word}</h1> : ''}
			<Button onClick={generateWordHandling} disabled={isPending}>
				{isStarted ? 'Next' : 'Start'}
			</Button>
		</>
	);
};

export default GenerateWord;
