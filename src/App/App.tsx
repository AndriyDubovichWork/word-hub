import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from '../Components/Form/Header/Header';
import Main from '../pages/Main/Main';
import SavedWords from '../pages/SavedWords/SavedWords';
import './App.scss';

const App = () => {
	const router = createBrowserRouter([
		{
			path: 'https://andriydubovichwork.github.io/word-hub/',
			element: (
				<>
					<Header />
					<Main />
				</>
			),
		},
		{
			path: 'https://andriydubovichwork.github.io/word-hub/savedWords',
			element: (
				<>
					<Header />
					<SavedWords />
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
