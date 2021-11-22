import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home.jsx';
import Channel from './Pages/Channel/Channel.jsx';
import Video from './Pages/Video/Video.jsx';

function AuthenticatedApp() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />

				<Route path='/channel/*' element={<Channel />} />

				<Route path='/channel/:id' element={<Video />} />
			</Routes>
		</>
	);
}

export default AuthenticatedApp;
