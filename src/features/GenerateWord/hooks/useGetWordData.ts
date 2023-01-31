import { useAppSelector } from '../../../Redux/hooks';

const useGetWordData = () => {
	// * selectors
	const english = useAppSelector((state) => state.CurrentWordSlice.english);

	const isPending = useAppSelector((state) => state.CurrentWordSlice.isPending);

	const isStarted = useAppSelector((state) => state.CurrentWordSlice.isStarted);

	return {
		english,
		isPending,
		isStarted,
	};
};

export default useGetWordData;
