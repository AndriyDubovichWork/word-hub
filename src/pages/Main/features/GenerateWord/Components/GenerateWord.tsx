import { Box } from '@mui/material';
import Button from '../../../../../Components/UI/Custom/CustomButton/CustomButton';
import CustomSelect from '../../../../../Components/UI/Custom/CustomSelect/CustomSelect';
import useGetWordData from '../hooks/useGetWordData';
const loadingImg = require('./../assets/loading.gif');
const GenerateWord = () => {
	const { word, isPending, isStarted, generateWordHandling, HandleSelect, Categories, selected } =
		useGetWordData();

	return (
		<Box textAlign='center' margin='1vh auto'>
			<h1>{word}</h1>
			{isPending && (
				<img src={loadingImg} alt='loading' style={{ display: 'flex', margin: '0 auto' }} />
			)}

			{isStarted ? (
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Button
						onClick={generateWordHandling}
						disabled={isPending}
						sx={{ width: '10vw', margin: '2vh auto' }}
					>
						Next
					</Button>
					<CustomSelect
						isPending={isPending}
						Elements={Categories}
						selected={selected}
						Handler={HandleSelect}
					/>
				</Box>
			) : (
				<Button
					onClick={generateWordHandling}
					disabled={isPending}
					sx={{
						width: '10vw',
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%, -50%)',
					}}
				>
					Start
				</Button>
			)}
		</Box>
	);
};

export default GenerateWord;
