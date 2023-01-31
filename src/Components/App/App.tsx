import { Provider } from 'react-redux';
import DefineWord from '../../features/DefineWord/Components/DefineWord';
import GenerateWord from '../../features/GenerateWord';
import store from '../../Redux/store';
import Header from '../Form/Header/Header';
import './App.scss';
const App = () => {
	return (
		<Provider store={store}>
			<Header />
			{/* <GenerateWords /> */}
			<GenerateWord />
			<DefineWord />
		</Provider>
	);
};

export default App;
