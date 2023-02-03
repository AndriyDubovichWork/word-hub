import Button from '../../../Components/UI/CustomButton/CustomButton';
import useGetWordTranslation from './../hooks/useGetWordTranslation';
const TranslateWord = () => {
	const { isPending, TranslateHandling, TranslatedWord, CouldNotTranslate } =
		useGetWordTranslation();
	return (
		<>
			<h2>{TranslatedWord}</h2>
			{!TranslatedWord && CouldNotTranslate && <h2>Could Not Translate</h2>}
			{!TranslatedWord && !CouldNotTranslate && (
				<Button
					onClick={() => {
						TranslateHandling();
					}}
					disabled={isPending}
				>
					Translate
				</Button>
			)}
		</>
	);
};

export default TranslateWord;
