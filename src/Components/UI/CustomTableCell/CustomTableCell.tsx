import { TableCell, tableCellClasses } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomTableCell = styled(TableCell)(() => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: '#000',
		color: '#fff',
		borderRadius: 0,
	},

	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
		backgroundColor: '#000',
		color: '#fff',
		border: '10px #fff',
	},
}));

export default CustomTableCell;
