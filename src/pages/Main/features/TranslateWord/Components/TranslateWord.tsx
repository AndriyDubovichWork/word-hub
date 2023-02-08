import { Box, Typography } from '@mui/material';
import Button from '../../../../../Components/UI/CustomButton/CustomButton';
import useGetWordTranslation from '../hooks/useGetWordTranslation';
import React from 'react';
const TranslateWord = () => {
	const { isPending, TranslateHandling, TranslatedWord, CouldNotTranslate } =
		useGetWordTranslation();
	return (
		<Box margin='1vh auto' textAlign='center'>
			<Typography variant='h2'>
				{!TranslatedWord && CouldNotTranslate ? 'Could Not Translate' : TranslatedWord}
			</Typography>
			{!TranslatedWord && !CouldNotTranslate && (
				<Button
					onClick={() => {
						TranslateHandling();
					}}
					disabled={isPending}
					sx={{ width: '10vw' }}
				>
					Translate
				</Button>
			)}
		</Box>
	);
};

export default TranslateWord;
