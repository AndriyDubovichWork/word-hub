import { Box, Typography } from '@mui/material';
import Button from '../../../Components/UI/CustomButton/CustomButton';
import useDefineWordData from '../hooks/useDefineWordData';

const DefineWord = () => {
	const { definitions, getDefinition, isPending, CouldNotDefine } = useDefineWordData();

	return (
		<Box>
			{!definitions[0] && !CouldNotDefine && (
				<Button
					disabled={isPending}
					onClick={() => getDefinition()}
					sx={{ display: 'flex', margin: '1vh auto', width: '10vw' }}
				>
					define
				</Button>
			)}
			{!definitions[0] && CouldNotDefine ? (
				<Typography variant='h3' textAlign='center'>
					Could Not Define
				</Typography>
			) : (
				definitions.map((definition) => {
					return (
						<Box display='inline-flex' key={definition}>
							<h2 style={{ color: 'red' }}>{definition ? '•' : ''}</h2>
							<h2>{definition}</h2>
						</Box>
					);
				})
			)}
		</Box>
	);
};

export default DefineWord;
