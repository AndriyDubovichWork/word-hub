import { Box } from '@mui/system';
import React from 'react';
type WordDefinitionProps = {
	showMore: boolean;
	id: number;
	selectedDefinition: number;
	definition: string;
	setSelectedDefinition: (id: number) => void;
};

const WordDefinition = ({
	showMore,
	id,
	definition,
	selectedDefinition,
	setSelectedDefinition,
}: WordDefinitionProps) => {
	const DefinitionElement = (
		<Box display='flex'>
			<h2
				style={{ color: selectedDefinition === id ? '#00FF00' : 'red', cursor: 'pointer' }}
				onClick={() => {
					setSelectedDefinition(id);
				}}
			>
				{definition ? '•' : ''}
			</h2>
			<h2>{definition}</h2>
		</Box>
	);
	if (!showMore && id <= 1) {
		return DefinitionElement;
	} else if (showMore) {
		return DefinitionElement;
	}
	return null;
};

export default WordDefinition;
