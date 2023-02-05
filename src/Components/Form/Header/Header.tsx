import { AppBar, Toolbar } from '@mui/material';
import './Header.scss';

const logo = require('./assets/imgs/logo.jpg');

const Header = () => {
	return (
		// header
		<AppBar sx={{ backgroundColor: '#1b1b1b' }} position='static'>
			<Toolbar>
				<img src={logo} alt='log' />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
