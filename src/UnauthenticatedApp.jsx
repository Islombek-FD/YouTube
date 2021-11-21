import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LogIn from './Pages/LogIn/LogIn.jsx';

function UnauthenticatedApp() {
	return (
		<>
			<Routes>
				<Route path='/' element={<LogIn />} />
			</Routes>
		</>
	);
}

export default UnauthenticatedApp;
