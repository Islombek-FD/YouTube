import React from 'react';
import './HamburgerButton.scss';

import useAside from '../../Hooks/useAside.js';

import HamburgerIcon from '../Lib/HamburgerIcon.jsx';

function HamburgerButton() {
	const [setOpen] = useAside(true);

	return (
		<>
			<button
				className='hamburger'
				onClick={() => setOpen((prev) => !prev)}>
				<HamburgerIcon />
			</button>
		</>
	);
}

export default HamburgerButton;
