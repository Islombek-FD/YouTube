import React from 'react';
import './HomeContent.scss';

import CitiesSection from '../CitiesSection/CitiesSection.jsx';
import RecommendedSection from '../RecommendedSection/RecommendedSection.jsx';
import FoodDrinkSection from '../FoodDrinkSection/FoodDrinkSection.jsx';
import useAside from '../../Hooks/useAside.js';

function HomeContent() {
	const [open] = useAside();
	const [videos, setVideos] = React.useState([]);
	const [recVideos, setRecVideos] = React.useState([]);
	const [foodVideos, setFoodVideos] = React.useState([]);

	React.useEffect(() => {
		fetch(process.env.REACT_APP_PLACEHOLDER_API + '/photos')
			.then((response) => response.json())
			.then((data) => {
				setVideos(data.splice(0, 15));
				setRecVideos(data.splice(15, 30));
				setFoodVideos(data.splice(30, 45));
			});
	}, []);

	return (
		<>
			<div className={`home-content ${open && 'home-content--fluid'}`}>
				<CitiesSection videos={videos} />

				<RecommendedSection videos={recVideos} />

				<FoodDrinkSection videos={foodVideos} />
			</div>
		</>
	);
}

export default HomeContent;
