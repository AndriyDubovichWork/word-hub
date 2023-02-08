import { Paper, Table, TableContainer } from '@mui/material';
import { useEffect } from 'react';
import getWordsFromDB from '../../../../../dataBase/getWordsFromDB';
import useSavedWordsTableData from '../hooks/useSavedWordsTableData';
import TableBody from './TableBody/TableBody';
import TableHead from './TableHead/TableHead';
import React from 'react';

const SavedWordsTable = () => {
	const { words, SaveWords } = useSavedWordsTableData();
	useEffect(() => {
		SaveWords(getWordsFromDB());
	}, []);
	// useEffect(() => {
	// 	if (words) {
	// 	}
	// 	SaveWords(words);
	// }, [words]);

	return (
		<TableContainer component={Paper}>
			<Table aria-label='words table'>
				<TableHead />
				<TableBody />
			</Table>
		</TableContainer>
	);
};

export default SavedWordsTable;
