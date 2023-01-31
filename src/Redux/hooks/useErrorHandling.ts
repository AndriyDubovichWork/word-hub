import { setMissingData as setUnfoundData } from '../CurrentWordSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
const useErrorHandling = () => {
	const dispatch = useAppDispatch();

	const DeffineErrorHandling = () => {
		dispatch(setMissingData({ ...MissingData, CouldNotDefine: true }));
	};
	const TranslateErrorHandling = () => {
		dispatch(
			setMissingData({
				...MissingData,
				CouldNotTranslate: true,
			})
		);
	};
	const MissingData = useAppSelector((state) => state.CurrentWordSlice.missingData);

	const setMissingData = (data: typeof MissingData) => dispatch(setUnfoundData(data));
	return { DeffineErrorHandling, TranslateErrorHandling, MissingData };
};

export default useErrorHandling;
