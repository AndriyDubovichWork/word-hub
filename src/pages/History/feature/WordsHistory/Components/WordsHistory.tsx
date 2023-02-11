import { Paper, Table, TableContainer } from '@mui/material';
import TableBody from './TableBody/TableBody';
import TableHead from './TableHead/TableHead';

const WordsHistory = () => {
	return (
		<TableContainer component={Paper}>
			<Table aria-label='words history table'>
				<TableHead />
				<TableBody />
			</Table>
		</TableContainer>
	);
};

export default WordsHistory;
