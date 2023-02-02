import Button from '../../../Components/UI/CustomButton/CustomButton';
import useDefineWordData from '../hooks/useDefineWordData';

const DefineWord = () => {
	const { definitions, getDefinition, isPending, CouldNotDefine } = useDefineWordData();

	return (
		<>
			{!definitions[0] && !CouldNotDefine && (
				<Button disabled={isPending} onClick={() => getDefinition()}>
					define
				</Button>
			)}
			{definitions.map((definition) => {
				return <h2 key={definition}>{definition}</h2>;
			})}
		</>
	);
};

export default DefineWord;
