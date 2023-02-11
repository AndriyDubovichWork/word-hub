import { FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
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
									color: isPending ? '#f3ca20' : '#fff',
									'&.Mui-checked': {
										color: '#f3ca20',
									},

									'&.Mui-disabled': {
										color: '#fff',
									},
								}}
							/>
						}
						key={element}
						label={
							<Typography
								sx={{
									color: isPending ? '#f3ca20' : '#fff',
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
