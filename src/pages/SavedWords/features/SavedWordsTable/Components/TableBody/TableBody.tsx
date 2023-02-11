import DeleteIcon from '@mui/icons-material/Delete';
import { TableBody, TableRow } from '@mui/material';
import React from 'react';
import TableCell from '../../../../../../Components/UI/Custom/CustomTableCell/CustomTableCell';
import useApproveDeleteData from '../../../ApproveDelete/hooks/useApproveDeleteData';
import useSavedWordsTableData from '../../hooks/useSavedWordsTableData';
const TableBodyComponent = () => {
	const { words, setShowApproval, setWordToDelete, dontAskAgain } = useSavedWordsTableData();
	const { Approve } = useApproveDeleteData();
	return (
		<TableBody>
			{words.map((word) => {
				const { english, Translated, selectedDefinition } = word;
				if (!english.word) {
					return <React.Fragment key={english.word}></React.Fragment>;
				}
				return (
					<TableRow key={english.word}>
						<TableCell align='left'>{english.word}</TableCell>
						<TableCell align='center'>
							{english.definitions[selectedDefinition]
								? english.definitions[selectedDefinition]
								: '❌'}
						</TableCell>
						<TableCell align='center'>{Translated.word ? Translated.word : '❌'}</TableCell>

						<TableCell align='center'>
							<DeleteIcon
								sx={{ cursor: 'pointer' }}
								onClick={() => {
									setWordToDelete(english.word);
									if (dontAskAgain) {
										Approve(english.word);
									} else {
										setShowApproval(true);
									}
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
