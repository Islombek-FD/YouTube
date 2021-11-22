import React from 'react';
import './VideoSeeingSection.scss';
import VideoPlayer from '../VideoPlayer/VideoPlayer.jsx';
import VideoSeeingInfo from '../VideoSeeingInfo/VideoSeeingInfo.jsx';

function VideoSeeingSection() {
	return (
		<>
			<div className='video-seeing'>
				<VideoPlayer />

				<VideoSeeingInfo />
			</div>
		</>
	);
}

export default VideoSeeingSection;
