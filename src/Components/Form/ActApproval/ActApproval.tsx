import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import Button from '../../UI/Custom/CustomButton/CustomButton';

type ActApprovalPropsT = {
	text: string;
	rejection: {
		func: Function;
		text: string;
	};
	approval: {
		func: Function;
		text: string;
	};
	checkBox: {
		func: Function;
		text: string;
	};
};

const ActApproval = ({ text, rejection, approval, checkBox }: ActApprovalPropsT) => {
	return (
		<Box
			width='60vw'
			height='20vh'
			zIndex={100}
			sx={{
				backgroundColor: '#0C0C0C',
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}
		>
			<Typography variant='h5' sx={{ textAlign: 'center' }}>
				{text}
			</Typography>
			<Box
				sx={{
					width: '100%',
					position: 'absolute',
					bottom: '0',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Button onClick={() => rejection.func()}>{rejection.text}</Button>
				<FormControlLabel
					label={checkBox.text}
					control={
						<Checkbox
							onChange={() => checkBox.func()}
							sx={{
								color: '#f3ca20',
								'&.Mui-checked': {
									color: '#f3ca20',
								},
							}}
						/>
					}
				/>
				<Button onClick={() => approval.func()}>{approval.text}</Button>
			</Box>
		</Box>
	);
};

export default ActApproval;
