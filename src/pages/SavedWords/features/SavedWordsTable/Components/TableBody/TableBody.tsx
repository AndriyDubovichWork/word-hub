import DeleteIcon from '@mui/icons-material/Delete';
import { TableBody, TableRow } from '@mui/material';
import React from 'react';
import TableCell from '../../../../../../Components/UI/CustomTableCell/CustomTableCell';
import RemoveWordFromDB from '../../../../../../dataBase/RemoveWordFromDB';
import useSavedWordsTableData from '../../hooks/useSavedWordsTableData';
const TableBodyComponent = () => {
	const { words, SaveWords } = useSavedWordsTableData();
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
							{Translated.definitions[selectedDefinition]
								? Translated.definitions[selectedDefinition]
								: '❌'}
						</TableCell>
						<TableCell align='center'>
							<DeleteIcon
								sx={{ cursor: 'pointer' }}
								onClick={() => {
									SaveWords(RemoveWordFromDB(words, english.word));
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
