import React from 'react';
import '../../Assets/Sass/variable.scss';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

const useStyles = makeStyles({
	root: {
		padding: '10px 20.5px !important',
		borderRadius: '20px !important',
		cursor: 'pointer',
	},
});

function SubscribeButton() {
	const classes = useStyles();

	return (
		<>
			<Button
				color='error'
				variant='contained'
				className={`${classes.root} button`}>
				Subscribe 2.3m
			</Button>
		</>
	);
}

export default SubscribeButton;
