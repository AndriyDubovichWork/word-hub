import React, { useEffect } from 'react';
import SlideBar from '../SlideBar/SlideBar';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.scss';
import { AppBar, Button, Toolbar } from '@mui/material';
import useHeaderData from './hooks/useHeaderData';
import Translate from '../../../api/Translate';
import Generateword from '../../../api/WordGenerator';
import getDefinition from '../../../api/getDefinition';
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

				{/* logo */}

				<img src={logo} alt='log' />

				{/* slider */}

				<SlideBar isOpen={isOpen} handleOpen={HandleOpen} />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
