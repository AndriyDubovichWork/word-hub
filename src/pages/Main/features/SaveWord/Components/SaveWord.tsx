import { Box } from '@mui/material';
import Button from '../../../../../Components/UI/CustomButton/CustomButton';
import useSaveWordData from '../hooks/useSaveWordData';
import React from 'react';
const SaveWord = () => {
	const { isPending, AddWord, isSaved } = useSaveWordData();
	return (
		<Box margin='1vh auto' textAlign='center'>
			<Button onClick={AddWord} disabled={isPending || isSaved} sx={{ width: '10vw' }}>
				{isSaved ? 'saved' : 'save word'}
			</Button>
		</Box>
	);
};

export default SaveWord;
