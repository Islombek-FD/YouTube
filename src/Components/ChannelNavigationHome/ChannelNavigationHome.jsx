import './ChannelNavigationHome.scss';
import { Link } from 'react-router-dom';

import useTheme from '../../Hooks/useTheme.js';

import ChannelHasVideoImage from '../../Assets/Images/channel_found_video.png';

function ChannelNavigationHome() {
	const [theme] = useTheme();

	return (
		<>
			<div className={`channel__video ${theme === 'dark' && 'dark'}`}>
				<Link to='/video/1'>
					<img
						className='channel__video-image'
						src={ChannelHasVideoImage}
						alt='Channel has video img'
						width='540'
						height='250'
					/>
				</Link>

				<div className='channel__video-info'>
					<h3 className='channel__video-heading'>
						Choosing The Best Audio Player Software For Your
						Computer
					</h3>

					<p className='channel__video-description'>
						Your cheap internet-based banner advertising will become
						one of the sought for ads there are. Today, the world of
						Internet advertising is rapidly evolving beyond banner
						ads and intrusive pop-ups. Bayles A common medium for
						advertising on the Internet is the use of banner ads.
					</p>

					<span className='channel__video-views'>
						11k views · 6 months ago
					</span>
				</div>
			</div>
		</>
	);
}

export default ChannelNavigationHome;
