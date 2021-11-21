import React from 'react';

import Aside from '../Aside/Aside.jsx';
import HomeContent from '../HomeContent/HomeContent.jsx';

function HomeMain() {
	return (
		<>
			<main className='main'>
				<Aside />

				<HomeContent />
			</main>
		</>
	);
}

export default HomeMain;
