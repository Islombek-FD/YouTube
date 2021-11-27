import './Nav.scss';
import { NavLink } from 'react-router-dom';

import content from '../../Localization/Content.js';
import useLang from '../../Hooks/useLang.js';
import useTheme from '../../Hooks/useTheme.js';

import HomeIcon from '../Lib/HomeIcon.jsx';
import TrendingIcon from '../Lib/TrendingIcon.jsx';
import SubscriptionsIcon from '../Lib/SubscriptionsIcon.jsx';
import LibraryIcon from '../Lib/LibraryIcon.jsx';
import HistoryIcon from '../Lib/HistoryIcon.jsx';
import WatchIcon from '../Lib/WatchIcon.jsx';
import FavouritesIcon from '../Lib/FavouritesIcon.jsx';
import LikeIcon from '../Lib/LikeIcon.jsx';
import MusicIcon from '../Lib/MusicIcon.jsx';
import GamesIcon from '../Lib/GamesIcon.jsx';
import ArrowBottomIcon from '../Lib/ArrowBottomIcon.jsx';

function Nav() {
	const [lang] = useLang();

	return (
		<>
			<nav className='nav'>
				<ul className='nav__list'>
					<li className='nav__item'>
						<NavLink className='nav__link' to='/'>
							<HomeIcon />
							{content[lang].home.nav.link1}
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/trending'>
							<TrendingIcon />
							{content[lang].home.nav.link2}
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/subscriptions'>
							<SubscriptionsIcon />
							{content[lang].home.nav.link3}
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/library'>
							<LibraryIcon />
							{content[lang].home.nav.link4}
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/history'>
							<HistoryIcon />
							{content[lang].home.nav.link5}
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/watch'>
							<WatchIcon />
							{content[lang].home.nav.link6}
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/favourites'>
							<FavouritesIcon />
							{content[lang].home.nav.link7}
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/like'>
							<LikeIcon />
							{content[lang].home.nav.link8}
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/music'>
							<MusicIcon />
							{content[lang].home.nav.link9}
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/games'>
							<GamesIcon />
							{content[lang].home.nav.link10}
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/show'>
							<ArrowBottomIcon />
							{content[lang].home.nav.link11}
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Nav;
