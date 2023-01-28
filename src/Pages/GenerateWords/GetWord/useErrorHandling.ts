import { setMissingData as setUnfoundData } from '../Redux/CurrentWordSlice';
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks';
const useErrorHandling = () => {
	const dispatch = useAppDispatch();

	const DeffineErrorHandling = () => {
		setMissingData({ ...MissingData, CouldNotDefine: true });
	};
	const TranslateErrorHandling = () => {
		setMissingData({ ...MissingData, CouldNotTranslate: true });
	};
	const MissingData = useAppSelector((state) => state.CurrentWordSlice.missingData);

	const setMissingData = (data: typeof MissingData) => dispatch(setUnfoundData(data));
	return { DeffineErrorHandling, TranslateErrorHandling, MissingData };
};

export default useErrorHandling;