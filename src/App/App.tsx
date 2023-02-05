import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../Components/Form/Header/Header';
import getWordsFromDB from '../dataBase/getWordsFromDB';
import Main from '../pages/Main/Main';
import SavedWords from '../pages/SavedWords/SavedWords';
import './App.scss';

const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main />,
		},
		{
			path: '/savedWords',
			element: <SavedWords />,
		},
	]);
	useEffect(() => {
		console.log(getWordsFromDB());
	});

	return (
		<>
			<Header />
			<RouterProvider router={router} />
		</>
	);
};

export default App;
