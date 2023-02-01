import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import { setDeffaultValues, setIsPending, setWord } from '../../../Redux/Slices/CurrentWordSlice';
import Generateword from '../api/getWord';

const useGetWordData = () => {
	// * selectors
	const word = useAppSelector((state) => state.CurrentWordSlice.english.word);

	const { isStarted, isPending } = useAppSelector((state) => state.CurrentWordSlice);

	const dispatch = useAppDispatch();

	const generateWordHandling = () => {
		dispatch(setDeffaultValues());

		dispatch(setIsPending(true));
		Generateword('noun').then((word: string) => {
			dispatch(setWord(word));
			dispatch(setIsPending(false));
		});
	};

	return {
		word,
		isPending,
		isStarted,
		generateWordHandling,
	};
};

export default useGetWordData;
