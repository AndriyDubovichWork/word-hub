import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { AppBar, Box, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import './Header.scss';
const logo = require('./assets/imgs/logo.jpg');

const Header = () => {
	return (
		// header
		<AppBar sx={{ backgroundColor: '#1b1b1b' }} position='static'>
			<Toolbar sx={{ justifyContent: 'space-between', position: 'relative' }}>
				<Link to='/word-hub/'>
					<img src={logo} alt='logo' />
				</Link>
				<Box>
					<Link to='/word-hub'>
						<LibraryAddIcon
							sx={{
								margin: '0 1vw',
								color: '#fff',
							}}
						/>
					</Link>
					<Link to='/word-hub/savedWords'>
						<ListAltIcon
							sx={{
								margin: '0 1vw',
								color: '#fff',
							}}
						/>
					</Link>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
