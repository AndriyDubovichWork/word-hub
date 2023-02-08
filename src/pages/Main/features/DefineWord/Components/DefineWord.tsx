import { Box, Typography } from '@mui/material';
import Button from '../../../../../Components/UI/CustomButton/CustomButton';
import useDefineWordData from '../hooks/useDefineWordData';
import WordDefinition from './WordDefinition/WordDefinition';

const DefineWord = () => {
	const {
		definitions,
		getDefinition,
		isPending,
		CouldNotDefine,
		showMore,
		setShowMore,
		selectedDefinition,
		setSelectedDefinition,
	} = useDefineWordData();

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
					return (
						<WordDefinition
							selectedDefinition={selectedDefinition}
							setSelectedDefinition={setSelectedDefinition}
							key={definition}
							showMore={showMore}
							definition={definition}
							id={id}
						/>
					);
				})
			)}
			{definitions.length > 2 && (
				<Button
					onClick={() => {
						setShowMore(!showMore);
					}}
					sx={{ display: 'flex', margin: '1vh auto', width: '10vw' }}
				>
					{showMore ? 'less' : 'more'}
				</Button>
			)}
		</Box>
	);
};

export default DefineWord;
