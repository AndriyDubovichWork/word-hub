import { Box } from '@mui/system';

type WordDefinitionProps = {
	showMore: boolean;
	id: number;
	definition: string;
};

const WordDefinition = ({ showMore, id, definition }: WordDefinitionProps) => {
	if (!showMore && id <= 1) {
		return (
			<Box display='flex' key={definition}>
				<h2 style={{ color: 'red' }}>{definition ? '•' : ''}</h2>
				<h2>{definition}</h2>
			</Box>
		);
	} else if (showMore) {
		return (
			<Box display='flex' key={definition}>
				<h2 style={{ color: 'red' }}>{definition ? '•' : ''}</h2>
				<h2>{definition}</h2>
			</Box>
		);
	}
	return null;
};

export default WordDefinition;
