import { useAppSelector } from '../../../Redux/hooks';
const useGetWordData = () => {
	// * selectors
	const english = useAppSelector((state) => state.CurrentWordSlice.english);

	const Translated = useAppSelector((state) => state.CurrentWordSlice.Translated);

	const isPending = useAppSelector((state) => state.CurrentWordSlice.isPending);

	// * dipsatchers

	return {
		english,
		isPending,
		Translated,
	};
};

export default useGetWordData;
