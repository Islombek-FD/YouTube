import React from 'react';
import '../../Assets/Sass/variable.scss';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

import content from '../../Localization/Content.js';
import useLang from '../../Hooks/useLang.js';

const useStyles = makeStyles({
	root: {
		width: 'auto',
		padding: '10px 15px !important',
		borderRadius: '20px !important',
		cursor: 'pointer',
	},
});

function SubscribeButton() {
	const classes = useStyles();
	const [lang] = useLang();

	return (
		<>
			<Button
				className={`${classes.root} button`}
				color='error'
				variant='contained'>
				{content[lang].home.subscribe}
			</Button>
		</>
	);
}

export default SubscribeButton;
