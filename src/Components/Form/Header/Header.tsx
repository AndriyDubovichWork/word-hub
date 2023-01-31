import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, Toolbar } from '@mui/material';
import SlideBar from '../SlideBar/SlideBar';
import './Header.scss';
import useHeaderData from './hooks/useHeaderData';

const logo = require('./assets/imgs/logo.jpg');

const Header = () => {
	const { isOpen, HandleOpen } = useHeaderData();

	return (
		// header
		<AppBar sx={{ backgroundColor: '#1b1b1b' }} position='static'>
			<Toolbar>
				{/* burger menu */}

				<Button sx={{ color: '#fff' }} onClick={HandleOpen}>
					<MenuIcon />
				</Button>

				<img src={logo} alt='log' />

				{/* slider */}

				<SlideBar isOpen={isOpen} handleOpen={HandleOpen} />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
