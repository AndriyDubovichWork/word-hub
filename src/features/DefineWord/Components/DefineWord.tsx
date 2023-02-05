import { Box, Typography } from '@mui/material';
import Button from '../../../Components/UI/CustomButton/CustomButton';
import useDefineWordData from '../hooks/useDefineWordData';
import WordDefinition from './WordDefinition/WordDefinition';

const DefineWord = () => {
	const { definitions, getDefinition, isPending, CouldNotDefine, showMore, setShowMore } =
		useDefineWordData();

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
				definitions.map((definition, id) => {
					return <WordDefinition showMore={showMore} definition={definition} id={id} />;
				})
			)}
			<Button
				onClick={() => {
					setShowMore(!showMore);
				}}
				sx={{ display: 'flex', margin: '1vh auto', width: '10vw' }}
			>
				{showMore ? 'show less' : 'show more'}
			</Button>
		</Box>
	);
};

export default DefineWord;
