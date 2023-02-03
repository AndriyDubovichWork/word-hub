import Button from '../../../Components/UI/CustomButton/CustomButton';
import useDefineWordData from '../hooks/useDefineWordData';

const DefineWord = () => {
	const { definitions, getDefinition, isPending, CouldNotDefine } = useDefineWordData();

	return (
		<div>
			{!definitions[0] && !CouldNotDefine && (
				<Button disabled={isPending} onClick={() => getDefinition()}>
					define
				</Button>
			)}
			{!definitions[0] && CouldNotDefine && <h1>Could Not Define</h1>}
			{definitions[0] &&
				definitions.map((definition) => {
					return <h3 key={definition}>-{definition}</h3>;
				})}
		</div>
	);
};

export default DefineWord;
