import './Nav.scss';
import { NavLink } from 'react-router-dom';

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
	return (
		<>
			<nav className='nav'>
				<ul className='nav__list'>
					<li className='nav__item'>
						<NavLink className='nav__link' to='/'>
							<HomeIcon />
							Home
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/trending'>
							<TrendingIcon />
							Trending
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/subscriptions'>
							<SubscriptionsIcon />
							Subscriptions
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/library'>
							<LibraryIcon />
							Library
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/history'>
							<HistoryIcon />
							History
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/watch'>
							<WatchIcon />
							Watch later
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/favourites'>
							<FavouritesIcon />
							Favourites
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/like'>
							<LikeIcon />
							Liked videos
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/music'>
							<MusicIcon />
							Music
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/games'>
							<GamesIcon />
							Games
						</NavLink>
					</li>

					<li className='nav__item'>
						<NavLink className='nav__link' to='/show'>
							<ArrowBottomIcon />
							Show more
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Nav;
