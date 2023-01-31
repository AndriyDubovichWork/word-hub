import Button from '../../../Components/UI/CustomButton/CustomButton';
import { setIsPending, setIsStarted, setWord } from '../../../Redux/CurrentWordSlice';
import { useAppDispatch } from '../../../Redux/hooks';
import Generateword from '../api/getWord';
import useGetWordData from '../hooks/useGetWordData';

const GenerateWord = () => {
	const dispatch = useAppDispatch();

	const { english, isPending, isStarted } = useGetWordData();

	const generateWordHandling = () => {
		dispatch(setIsPending(true));
		Generateword('noun').then((word: string) => {
			dispatch(setWord(word));
			dispatch(setIsPending(false));
			dispatch(setIsStarted(true));
		});
	};

	return (
		<>
			<Button onClick={generateWordHandling} disabled={isPending}>
				{isStarted ? 'Next' : 'Start'}
			</Button>
			{isStarted ? <h1>{english.word}</h1> : ''}
		</>
	);
};

export default GenerateWord;
