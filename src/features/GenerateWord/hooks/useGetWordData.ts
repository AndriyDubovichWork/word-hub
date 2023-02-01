import {
	setDeffaultValues,
	setIsPending,
	setIsStarted,
	setWord,
} from '../../../Redux/CurrentWordSlice';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
import Generateword from '../api/getWord';

const useGetWordData = () => {
	// * selectors
	const word = useAppSelector((state) => state.CurrentWordSlice.english.word);

	const isPending = useAppSelector((state) => state.CurrentWordSlice.isPending);

	const isStarted = useAppSelector((state) => state.CurrentWordSlice.isStarted);

	const dispatch = useAppDispatch();

	const generateWordHandling = () => {
		dispatch(setDeffaultValues());

		dispatch(setIsPending(true));
		Generateword('noun').then((word: string) => {
			dispatch(setWord(word));
			dispatch(setIsPending(false));
			dispatch(setIsStarted(true));
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
