import React from 'react';
import './VideoMain.scss';

import Aside from '../Aside/Aside.jsx';
import VideoContent from '../VideoContent/VideoContent.jsx';

function VideoMain() {
	return (
		<>
			<main className='video-main'>
				<Aside />

				<VideoContent />
			</main>
		</>
	);
}

export default VideoMain;
