import React from 'react';
import './ChannelContent.scss';

import useAside from '../../Hooks/useAside.js';
import ChannelVideosSection from '../ChannelVideosSection/ChannelVideosSection.jsx';
import ChannelInfoSection from '../ChannelInfoSection/ChannelInfoSection.jsx';

function ChannelContent() {
	const [open] = useAside();
	const [videos, setVideos] = React.useState([]);

	React.useEffect(() => {
		fetch(process.env.REACT_APP_PLACEHOLDER_API + '/photos')
			.then((response) => response.json())
			.then((data) => {
				setVideos(data.splice(45, 60));
			});
	}, []);

	return (
		<>
			<div
				className={`channel-content ${
					open && 'channel-content--fluid'
				}`}>
				<ChannelInfoSection />

				<ChannelVideosSection videos={videos} />
			</div>
		</>
	);
}

export default ChannelContent;
