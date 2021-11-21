import React from 'react';
import './HomeContent.scss';

import CitiesSection from '../CitiesSection/CitiesSection.jsx';
import RecommendedSection from '../RecommendedSection/RecommendedSection.jsx';
import FoodDrinkSection from '../FoodDrinkSection/FoodDrinkSection.jsx';
import useAside from '../../Hooks/useAside.js';

function HomeContent() {
	const [open] = useAside();
	const [videos, setVideos] = React.useState([]);

	React.useEffect(() => {
		fetch(process.env.REACT_APP_PLACEHOLDER_API + '/photos')
			.then((response) => response.json())
			.then((data) => {
				setVideos(data.splice(0, 20));
			});
	}, []);

	return (
		<>
			<div className={`home-content ${open && 'home-content--fluid'}`}>
				<CitiesSection videos={videos} />

				<RecommendedSection videos={videos} />

				<FoodDrinkSection videos={videos} />
			</div>
		</>
	);
}

export default HomeContent;
