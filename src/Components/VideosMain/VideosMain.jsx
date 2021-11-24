import React from 'react';
import './VideosMain.scss';

import Aside from '../Aside/Aside.jsx';
import VideosContent from '../VideosContent/VideosContent.jsx';

function VideosMain() {
	return (
		<>
			<main className='video-main'>
				<Aside />

				<VideosContent />
			</main>
		</>
	);
}

export default VideosMain;
