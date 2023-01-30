import React from 'react';
import Header from '../Form/Header/Header';
import GenerateWords from '../../features/GenerateWords/GenerateWords';
import store from '../../Redux/store';
import { Provider } from 'react-redux';
import './App.scss';
import GenerateWord from '../../features/GenerateWord';
const App = () => {
	return (
		<Provider store={store}>
			<Header />
			{/* <GenerateWords /> */}
			<GenerateWord />
		</Provider>
	);
};

export default App;
