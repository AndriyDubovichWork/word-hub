import ListAltIcon from '@mui/icons-material/ListAlt';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import './Header.scss';
const logo = require('./assets/imgs/logo.jpg');

const Header = () => {
	return (
		// header
		<AppBar sx={{ backgroundColor: '#1b1b1b' }} position='static'>
			<Toolbar sx={{ justifyContent: 'space-between', position: 'relative' }}>
				<Link to='/'>
					<img src={logo} alt='logo' />
				</Link>
				<Link to='/savedWords'>
					<ListAltIcon
						sx={{
							color: '#fff',
							position: 'absolute',
							top: '50%',
							right: '2%',
							transform: 'translateY(-50%)',
						}}
					/>
				</Link>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
