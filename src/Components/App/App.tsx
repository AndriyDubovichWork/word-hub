import DefineWord from '../../features/DefineWord';
import GenerateWord from '../../features/GenerateWord';
import { useAppSelector } from '../../Redux/hooks';
import Header from '../Form/Header/Header';
import './App.scss';
const App = () => {
	const isStarted = useAppSelector((state) => state.CurrentWordSlice.isStarted);

	return (
		<>
			<Header />
			<GenerateWord />
			{isStarted ? (
				<>
					<DefineWord />
				</>
			) : (
				<></>
			)}
		</>
	);
};

export default App;
