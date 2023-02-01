import Button from '../../../Components/UI/CustomButton/CustomButton';
import useDefineWordData from '../hooks/useDefineWordData';

const DefineWord = () => {
	const { definitions, getDefinition, isPending, CouldNotDefine } = useDefineWordData();

	return (
		<>
			{!definitions[0].definition && !CouldNotDefine && (
				<Button disabled={isPending} onClick={() => getDefinition()}>
					define
				</Button>
			)}
			{definitions.map((element) => {
				return <h2>{element.definition}</h2>;
			})}
		</>
	);
};

export default DefineWord;
