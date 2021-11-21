import React from 'react';
import './ChannelNavigation.scss';
import { Routes, Route, NavLink } from 'react-router-dom';

import SearchIcon from '../Lib/SearchIcon.jsx';
import ChannelNavigationHome from '../ChannelNavigationHome/ChannelNavigationHome.jsx';
import ChannelRecommended from '../ChannelRecommended/ChannelRecommended.jsx';

function ChannelNavigation() {
	return (
		<>
			<div className='channel-navigation'>
				<div className='channel-navigation__content'>
					<ul className='channel-navigation__list'>
						<li className='channel-navigation__item'>
							<NavLink
								className='channel-navigation__link'
								to='home'>
								Home
							</NavLink>
						</li>

						<li className='channel-navigation__item'>
							<NavLink
								className='channel-navigation__link'
								to='videos'>
								Videos
							</NavLink>
						</li>

						<li className='channel-navigation__item'>
							<NavLink
								className='channel-navigation__link'
								to='playlists'>
								Playlists
							</NavLink>
						</li>

						<li className='channel-navigation__item'>
							<NavLink
								className='channel-navigation__link'
								to='channels'>
								Channels
							</NavLink>
						</li>

						<li className='channel-navigation__item'>
							<NavLink
								className='channel-navigation__link'
								to='discussion'>
								Discussion
							</NavLink>
						</li>

						<li className='channel-navigation__item'>
							<NavLink
								className='channel-navigation__link'
								to='about'>
								About
							</NavLink>
						</li>

						<li className='channel-navigation__item'>
							<NavLink
								className='channel-navigation__link'
								to='search'>
								<SearchIcon />
							</NavLink>
						</li>
					</ul>

					<Routes>
						<Route
							path='home'
							element={<ChannelNavigationHome />}
						/>
						<Route path='videos' element={<h3>Videos</h3>} />
						<Route path='playlists' element={<h3>Playlists</h3>} />
						<Route path='channels' element={<h3>Channels</h3>} />
						<Route
							path='discussion'
							element={<h3>Discussion</h3>}
						/>
						<Route path='about' element={<h3>About</h3>} />
						<Route path='search' element={<h3>Search</h3>} />
					</Routes>
				</div>

				<ChannelRecommended />
			</div>
		</>
	);
}

export default ChannelNavigation;
