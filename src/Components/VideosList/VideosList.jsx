import React from 'react';
import './VideosList.scss';
import { Link } from 'react-router-dom';

import content from '../../Localization/Content.js';
import useTheme from '../../Hooks/useTheme.js';
import useLang from '../../Hooks/useLang.js';

function VideosList() {
	const [theme] = useTheme();
	const [lang] = useLang();
	const [videos, setVideos] = React.useState([]);

	React.useEffect(() => {
		fetch(process.env.REACT_APP_PLACEHOLDER_API + '/photos')
			.then((response) => response.json())
			.then((data) => setVideos(data.slice(60, 75)));
	}, []);

	return (
		<>
			<div className={`videos-list ${theme === 'dark' && 'dark'}`}>
				<div className='videos-list__info'>
					<h3 className='videos-list__heading'>
						{content[lang].video.next}
					</h3>

					<div className='videos-list__autoplay'>
						<strong className='videos-list__autoplay-text'>
							{content[lang].video.autoplay}
						</strong>

						<input
							className='videos-list__input-checkbox'
							type='checkbox'
							id='autoplay'
						/>

						<label
							className='videos-list__input-control'
							htmlFor='autoplay'></label>
					</div>
				</div>

				<ul className='videos__playlist'>
					{videos &&
						videos.map((video) => (
							<li
								className='videos__playlist-item'
								key={video.id}>
								<Link
									className='videos__playlist-link'
									to={`/video/${video.id}`}>
									<img
										className='videos__playlist-image'
										src={video.thumbnailUrl}
										alt='Videos list img'
										width='367'
										height='213'
									/>

									<h4 className='videos__playlist-title'>
										{video.title
											.split(' ')
											.slice(0, 2)
											.join(' ')}
									</h4>

									<div className='videos__playlist-subscribed'>
										<span className='videos__playlist-subscribed--count'>
											123k views
										</span>

										<span className='videos__playlist-subscribed--name'>
											Dollie Blair
										</span>
									</div>
								</Link>
							</li>
						))}
				</ul>
			</div>
		</>
	);
}

export default VideosList;
