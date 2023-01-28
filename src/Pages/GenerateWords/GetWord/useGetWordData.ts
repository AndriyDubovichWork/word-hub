import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
const useGetWordData = () => {
	const dispatch = useAppDispatch();

	// * selectors
	const english = useAppSelector((state) => state.CurrentWordSlice.english);

	const Translated = useAppSelector((state) => state.CurrentWordSlice.Translated);

	// * dipsatchers

	return {
		english,
		Translated,

		dispatch,
	};
};

export default useGetWordData;
