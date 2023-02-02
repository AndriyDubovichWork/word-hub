import Button from '../../../Components/UI/CustomButton/CustomButton';
import useGetWordTranslation from './../hooks/useGetWordTranslation';
const TranslateWord = () => {
	const { isPending, TranslateHandling } = useGetWordTranslation();
	return (
		<Button
			onClick={() => {
				TranslateHandling();
			}}
			disabled={isPending}
		>
			Translate
		</Button>
	);
};

export default TranslateWord;
