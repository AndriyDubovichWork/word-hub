import { Box } from '@mui/material';
import DefineWord from '../../../features/DefineWord';
import GenerateWord from '../../../features/GenerateWord';
import TranslateWords from '../../../features/TranslateWord';
import { useAppSelector } from '../../../Redux/hooks';

const Main = () => {
	const isStarted = useAppSelector((state) => state.CurrentWordSlice.isStarted);
	return (
		<Box width='90vw' margin='0 auto'>
			<GenerateWord />
			{isStarted && (
				<>
					<TranslateWords />
					<DefineWord />
				</>
			)}
		</Box>
	);
};

export default Main;
