import React from 'react';
import { Divider, List, ListItem } from '@mui/material';
import CustomButton from '../../UI/CustomButton/CustomButton';
const Drawer = () => {
	const buttons = [
		{
			text: 'Translate',
			onClick: () => {},
			disabled: false,
		},
		{
			text: 'Delete',
			onClick: () => {},
			disabled: false,
		},
	];
	return (
		<div>
			<List>
				{/* buttons */}
				<ListItem>
					{buttons.map((button) => {
						return (
							<CustomButton
								key={button.text}
								disabled={button.disabled}
								color='primary'
								variant='contained'
								onClick={button.onClick}
								sx={{ m: 2 }}
							>
								{button.text}
							</CustomButton>
						);
					})}

					<Divider />
				</ListItem>
			</List>
		</div>
	);
};

export default Drawer;
