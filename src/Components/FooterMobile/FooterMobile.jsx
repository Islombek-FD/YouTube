import './FooterMobile.scss';
import { NavLink } from 'react-router-dom';

import HomeIcon from '../Lib/HomeIcon.jsx';
import TrendingIcon from '../Lib/TrendingIcon.jsx';
import SubscriptionsIcon from '../Lib/SubscriptionsIcon.jsx';
import LibraryIcon from '../Lib/LibraryIcon.jsx';

function FooterMobile() {
	return (
		<>
			<footer className='footer'>
				<div className='container'>
					<ul className='footer-mobile__list'>
						<li className='footer-mobile__item'>
							<NavLink className='footer-mobile__link' to='/'>
								<HomeIcon />
								Home
							</NavLink>
						</li>

						<li className='footer-mobile__item'>
							<NavLink
								className='footer-mobile__link'
								to='/trending'>
								<TrendingIcon />
								Trending
							</NavLink>
						</li>

						<li className='footer-mobile__item'>
							<NavLink
								className='footer-mobile__link'
								to='/subscriptions'>
								<SubscriptionsIcon />
								Subscriptions
							</NavLink>
						</li>

						<li className='footer-mobile__item'>
							<NavLink
								className='footer-mobile__link'
								to='/library'>
								<LibraryIcon />
								Library
							</NavLink>
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
}

export default FooterMobile;
