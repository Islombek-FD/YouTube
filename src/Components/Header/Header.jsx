import React from 'react';
import './Header.scss';
import '../../Assets/fa/css/fontawesome-all.min.css';

import useLang from '../../Hooks/useLang.js';
import useTheme from '../../Hooks/useTheme.js';

import HamburgerButton from '../HamburgerButton/HamburgerButton.jsx';
import SearchInput from '../SearchInput/SearchInput.jsx';

import LogoIcon from '../Lib/LogoIcon.jsx';
import CamcorderIcon from '../Lib/CamcorderIcon.jsx';
import ThemeIcon from '../Lib/ThemeIcon.jsx';
import CombinedShapeIcon from '../Lib/CombinedShapeIcon.jsx';
import BellIcon from '../Lib/BellIcon.jsx';
import SearchIcon from '../Lib/SearchIcon.jsx';

import UserpicImage from '../../Assets/Images/Userpic.png';

function Header() {
	const [lang, setLang] = useLang();
	const [theme, setTheme] = useTheme();

	const handleSelectLang = (evt) => {
		setLang(evt.target.value);
	};

	const hendleSelectTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	return (
		<>
			<header
				className={`${theme === 'dark' ? 'header dark' : 'header'}`}>
				<HamburgerButton />

				<LogoIcon />

				<SearchInput />

				<SearchIcon />

				<select
					className='header__select'
					value={lang}
					onChange={handleSelectLang}>
					<option value='en'>EN</option>
					<option value='uz'>UZ</option>
				</select>

				<ThemeIcon hendleSelectTheme={hendleSelectTheme} />

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
