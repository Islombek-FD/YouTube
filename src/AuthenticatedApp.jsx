import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home.jsx';
import Channel from './Pages/Channel/Channel.jsx';
import Video from './Pages/Video/Video.jsx';
import VideoSingle from './Pages/VideoSingle/VideoSingle.jsx';

function AuthenticatedApp() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />

				<Route path='/channel/*' element={<Channel />} />

				<Route path='/video' element={<Video />} />

				<Route path='/video/:id' element={<VideoSingle />} />
			</Routes>
		</>
	);
}

export default AuthenticatedApp;
