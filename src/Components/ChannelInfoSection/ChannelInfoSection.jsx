import React from 'react';
import './ChannelInfoSection.scss';

import ChannelNavigation from '../ChannelNavigation/ChannelNavigation.jsx';
import BellIcon from '../Lib/BellIcon.jsx';
import SubscribeButton from '../SubscribeButton/SubscribeButton.jsx';

import ChannelHasImage from '../../Assets/Images/chanel_user.png';

function ChannelInfoSection() {
	return (
		<>
			<section className='channel'>
				<div className='container'>
					<div className='channel__inner'>
						<h2 className='visually-hidden'>
							Channel section main content
						</h2>

						<div className='channel__inner-image'></div>

						<div className='channel__has'>
							<img
								src={ChannelHasImage}
								alt='Channel user img'
								width='80'
								height='80'
							/>

							<div className='channel__has-info'>
								<strong className='channel__has-name'>
									Margaret Phelps
								</strong>

								<span className='channel__has-subscribers'>
									245K subscribed
								</span>
							</div>

							<BellIcon />

							<SubscribeButton />
						</div>

						<ChannelNavigation />
					</div>
				</div>
			</section>
		</>
	);
}

export default ChannelInfoSection;
