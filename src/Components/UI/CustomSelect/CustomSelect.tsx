import { styled } from '@mui/material/styles';
import {
	FormControlLabel,
	InputBase,
	NativeSelect,
	Radio,
	RadioGroup,
	Select,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CustomInput from '../CustomInput/CustomInput';
import CustomMenuItem from '../CustomMenuItem/CustomMenuItem';
type CustomSelectPropsT = {
	isPending: boolean;
	Elements: string[];
	selected: string;
	Handler: (v: string) => void;
};

const CustomSelect = ({ Elements, Handler, isPending, selected }: CustomSelectPropsT) => {
	return (
		<RadioGroup
			value={selected}
			row
			aria-labelledby='demo-row-radio-buttons-group-label'
			name='row-radio-buttons-group'
			onChange={(e: any) => Handler(e.target.value)}
		>
			{Elements.map((element) => {
				return (
					<FormControlLabel
						disabled={isPending}
						value={element}
						control={
							<Radio
								sx={{
									color: '#fff',
									'&.Mui-checked': {
										color: '#f3ca20',
									},
									'&.Mui-disabled': {
										color: '#f3ca20',
									},
								}}
							/>
						}
						key={element}
						label={
							<Typography
								sx={{
									color: '#fff',
								}}
							>
								{element.toUpperCase()}
							</Typography>
						}
					/>
				);
			})}
		</RadioGroup>
	);
};

export default CustomSelect;
