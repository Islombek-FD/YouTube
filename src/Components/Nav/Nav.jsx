import './Nav.scss';
import { NavLink } from 'react-router-dom';

import content from '../../Localization/Content.js';
import useLang from '../../Hooks/useLang.js';

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
							<span className='nav__link-text'>
								{content[lang].home.nav.link1}
							</span>
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/trending'>
							<TrendingIcon />
							<span className='nav__link-text'>
								{content[lang].home.nav.link2}
							</span>
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/subscriptions'>
							<SubscriptionsIcon />
							<span className='nav__link-text'>
								{content[lang].home.nav.link3}
							</span>
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/library'>
							<LibraryIcon />
							<span className='nav__link-text'>
								{content[lang].home.nav.link4}
							</span>
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/history'>
							<HistoryIcon />
							<span className='nav__link-text'>
								{content[lang].home.nav.link5}
							</span>
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/watch'>
							<WatchIcon />
							<span className='nav__link-text'>
								{content[lang].home.nav.link6}
							</span>
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/favourites'>
							<FavouritesIcon />
							<span className='nav__link-text'>
								{content[lang].home.nav.link7}
							</span>
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/like'>
							<LikeIcon />
							<span className='nav__link-text'>
								{content[lang].home.nav.link8}
							</span>
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/music'>
							<MusicIcon />
							<span className='nav__link-text'>
								{content[lang].home.nav.link9}
							</span>
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/games'>
							<GamesIcon />
							<span className='nav__link-text'>
								{content[lang].home.nav.link10}
							</span>
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/show'>
							<ArrowBottomIcon />
							<span className='nav__link-text'>
								{content[lang].home.nav.link11}
							</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Nav;
