import { TableHead, TableRow } from '@mui/material';
import TableCell from '../../../../../../Components/UI/Custom/CustomTableCell/CustomTableCell';
const TableHeadComponent = () => {
	return (
		<TableHead>
			<TableRow>
				<TableCell align='left'>WORD</TableCell>
				<TableCell align='center'>RETURN</TableCell>
				<TableCell align='center'>REMOVE</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default TableHeadComponent;
