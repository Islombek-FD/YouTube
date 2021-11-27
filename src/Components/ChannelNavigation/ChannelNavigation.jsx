import './ChannelNavigation.scss';
import { Routes, Route, NavLink } from 'react-router-dom';

import content from '../../Localization/Content.js';
import useTheme from '../../Hooks/useTheme.js';
import useLang from '../../Hooks/useLang.js';

import SearchIcon from '../Lib/SearchIcon.jsx';
import ChannelNavigationHome from '../ChannelNavigationHome/ChannelNavigationHome.jsx';
import ChannelRecommended from '../ChannelRecommended/ChannelRecommended.jsx';

function ChannelNavigation() {
	const [theme] = useTheme();
	const [lang] = useLang();

	return (
		<>
			<div className={`channel-navigation ${theme === 'dark' && 'dark'}`}>
				<div className='channel-navigation__content'>
					<ul className='channel-navigation__list'>
						<li className='channel-navigation__item'>
							<NavLink
								className='channel-navigation__link'
								to='home'>
								{content[lang].channel.menu.link1}
							</NavLink>
						</li>

						<li className='channel-navigation__item'>
							<NavLink
								className='channel-navigation__link'
								to='videos'>
								{content[lang].channel.menu.link2}
							</NavLink>
						</li>

						<li className='channel-navigation__item'>
							<NavLink
								className='channel-navigation__link'
								to='playlists'>
								{content[lang].channel.menu.link3}
							</NavLink>
						</li>

						<li className='channel-navigation__item'>
							<NavLink
								className='channel-navigation__link'
								to='channels'>
								{content[lang].channel.menu.link4}
							</NavLink>
						</li>

						<li className='channel-navigation__item'>
							<NavLink
								className='channel-navigation__link'
								to='discussion'>
								{content[lang].channel.menu.link5}
							</NavLink>
						</li>

						<li className='channel-navigation__item'>
							<NavLink
								className='channel-navigation__link'
								to='about'>
								{content[lang].channel.menu.link6}
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
