import React from 'react';
import './ChannelContent.scss';

import useAside from '../../Hooks/useAside.js';

import ChannelVideosSection from '../ChannelVideosSection/ChannelVideosSection.jsx';
import ChannelInfoSection from '../ChannelInfoSection/ChannelInfoSection.jsx';

function ChannelContent() {
	const [open] = useAside();

	return (
		<>
			<div
				className={`channel-content ${
					open && 'channel-content--fluid'
				}`}>
				<ChannelInfoSection />

				<ChannelVideosSection />
			</div>
		</>
	);
}

export default ChannelContent;
