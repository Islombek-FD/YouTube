import React from 'react';
import './VideosContent.scss';
import { Link } from 'react-router-dom';

function VideosList() {
	const [videos, setVideos] = React.useState([]);

	React.useEffect(() => {
		fetch(process.env.REACT_APP_PLACEHOLDER_API + '/photos')
			.then((response) => response.json())
			.then((data) => setVideos(data.slice(76, 120)));
	}, []);

	return (
		<>
			<section className='videos-content'>
				<div className='container'>
					<ul className='videos-content__list'>
						{videos &&
							videos.map((video) => (
								<li
									className='videos-content__item'
									key={video.id}>
									<Link
										className='videos-content__link'
										to={`/video/${video.id}`}>
										<img
											className='videos-content__image'
											src={video.thumbnailUrl}
											alt='Videos list img'
											width='367'
											height='213'
										/>

										<h4 className='videos-content__title'>
											{video.title
												.split(' ')
												.slice(0, 3)
												.join(' ')}
										</h4>

										<div className='videos-content__subscribe'>
											<span className='videos-content__subscribe-views'>
												123k views
											</span>

											<span className='videos-content__subscribe-name'>
												Dollie Blair
											</span>
										</div>
									</Link>
								</li>
							))}
					</ul>
				</div>
			</section>
		</>
	);
}

export default VideosList;
