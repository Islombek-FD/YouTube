import React from 'react';
import '../../Assets/Sass/variable.scss';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

const useStyles = makeStyles({
	root: {
		width: '154px',
		padding: '10px 15px !important',
		borderRadius: '20px !important',
		cursor: 'pointer',
	},
});

function SubscribeButton() {
	const classes = useStyles();

	return (
		<>
			<Button
				className={`${classes.root} button`}
				color='error'
				variant='contained'>
				Subscribe 2.3m
			</Button>
		</>
	);
}

export default SubscribeButton;
