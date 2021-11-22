import React from 'react';
import './VideoContent.scss';

import VideosList from '../VideosList/VideosList.jsx';
import VideoSeeingSection from '../VideoSeeingSection/VideoSeeingSection.jsx';

function VideoContent() {
	return (
		<>
			<section className='video-content'>
				<div className='container-lg'>
					<VideoSeeingSection />

					<VideosList />
				</div>
			</section>
		</>
	);
}

export default VideoContent;
