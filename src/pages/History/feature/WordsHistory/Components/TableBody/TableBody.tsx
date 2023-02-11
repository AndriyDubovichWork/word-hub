import DeleteIcon from '@mui/icons-material/Delete';
import UndoIcon from '@mui/icons-material/Undo';
import { TableBody, TableRow } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import TableCell from '../../../../../../Components/UI/Custom/CustomTableCell/CustomTableCell';
import useWordsHistoryData from '../../hooks/useWordsHistoryData';
const TableBodyComponent = () => {
	const { wordsHistory, RemoveWordFromHistory, ReturnToWordFromHistory } = useWordsHistoryData();
	return (
		<TableBody>
			{wordsHistory.map((word) => {
				if (!word) {
					return <React.Fragment key={word}></React.Fragment>;
				}
				return (
					<TableRow key={word}>
						<TableCell align='left'>{word}</TableCell>

						<TableCell align='center'>
							<Link to='/word-hub/'>
								<UndoIcon
									sx={{ cursor: 'pointer', color: '#fff' }}
									onClick={() => {
										ReturnToWordFromHistory(word);
									}}
								/>
							</Link>
						</TableCell>
						<TableCell align='center'>
							<DeleteIcon
								sx={{ cursor: 'pointer' }}
								onClick={() => {
									RemoveWordFromHistory(word);
								}}
							/>
						</TableCell>
					</TableRow>
				);
			})}
		</TableBody>
	);
};

export default TableBodyComponent;
