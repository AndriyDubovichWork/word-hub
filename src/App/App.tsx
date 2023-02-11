import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../Components/Form/Header/Header';
import History from '../pages/History/History';
import Main from '../pages/Main/Main';
import SavedWords from '../pages/SavedWords/SavedWords';
import './App.scss';
const App = () => {
	const router = createBrowserRouter([
		{
			path: '/word-hub/',
			element: (
				<>
					<Header />
					<Main />
				</>
			),
		},
		{
			path: '/word-hub/savedWords',
			element: (
				<>
					<Header />
					<SavedWords />
				</>
			),
		},
		{
			path: '/word-hub/history',
			element: (
				<>
					<Header />
					<History />
				</>
			),
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
