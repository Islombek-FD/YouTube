import React from 'react';
import './Header.scss';

import HamburgerButton from '../HamburgerButton/HamburgerButton.jsx';
import SearchInput from '../SearchInput/SearchInput.jsx';

import LogoIcon from '../Lib/LogoIcon.jsx';
import CamcorderIcon from '../Lib/CamcorderIcon.jsx';
import CombinedShapeIcon from '../Lib/CombinedShapeIcon.jsx';
import BellIcon from '../Lib/BellIcon.jsx';
import SearchIcon from '../Lib/SearchIcon.jsx';

import UserpicImage from '../../Assets/Images/Userpic.png';

function Header() {
	return (
		<>
			<header className='header'>
				<HamburgerButton />

				<LogoIcon />

				<SearchInput />

				<SearchIcon />

				<ul className='header__icons'>
					<li className='header__icon'>
						<CamcorderIcon />
					</li>

					<li className='header__icon'>
						<CombinedShapeIcon />
					</li>

					<li className='header__icon'>
						<BellIcon />
					</li>
				</ul>

				<img
					src={UserpicImage}
					alt='User pic img'
					width='40'
					height='40'
				/>
			</header>
		</>
	);
}

export default Header;
