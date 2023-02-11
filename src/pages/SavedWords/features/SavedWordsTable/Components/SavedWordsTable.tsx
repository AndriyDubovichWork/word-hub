import { Paper, Table, TableContainer } from '@mui/material';
import { useEffect } from 'react';
import getWordsFromDB from '../../../../../dataBase/getWordsFromDB';
import ApproveDelete from '../../ApproveDelete';
import useSavedWordsTableData from '../hooks/useSavedWordsTableData';
import TableBody from './TableBody/TableBody';
import TableHead from './TableHead/TableHead';

const SavedWordsTable = () => {
	const { SaveWords, showApproval } = useSavedWordsTableData();
	useEffect(() => {
		SaveWords(getWordsFromDB());
	}, []);

	return (
		<>
			<TableContainer component={Paper}>
				<Table aria-label='words table'>
					<TableHead />
					<TableBody />
				</Table>
			</TableContainer>
			{showApproval ? <ApproveDelete /> : <></>}
		</>
	);
};

export default SavedWordsTable;
