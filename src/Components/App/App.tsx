import React from 'react';
import Header from '../Form/Header/Header';
import GenerateWords from '../../Pages/GenerateWords/GenerateWords';
import store from '../../Redux/store';
import { Provider } from 'react-redux';
import './App.scss';
const App = () => {
	return (
		<Provider store={store}>
			<Header />
			<GenerateWords />
		</Provider>
	);
};

export default App;
