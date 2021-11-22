import React from 'react';
import './VideoPlayer.scss';

import { useParams } from 'react-router-dom';

import HandGoodIcon from '../Lib/HandGoodIcon.jsx';
import HandBadIcon from '../Lib/HandBadIcon.jsx';
import ShareIcon from '../Lib/ShareIcon.jsx';
import MoreIcon from '../Lib/MoreIcon.jsx';

function VideoPlayer() {
	const { id } = useParams();
	const [video, setVideo] = React.useState({});

	React.useEffect(() => {
		fetch(process.env.REACT_APP_PLACEHOLDER_API + '/photos/' + id)
			.then((response) => response.json())
			.then((data) => setVideo(data));
	}, [id]);

	return (
		<>
			<div className='video-player'>
				<img
					className='video-player__image'
					src={video.url}
					alt='Selected video img'
					width='100%'
					height='700'
				/>

				<h3 className='video-player__title'>{video.title}</h3>

				<div className='video-player__subscribed'>
					<span className='video-player__views-count'>
						123k views
					</span>

					<ul className='video-player__icons'>
						<li className='video-player__icon'>
							<HandGoodIcon /> 123k
						</li>

						<li className='video-player__icon'>
							<HandBadIcon /> 435k
						</li>

						<li className='video-player__icon'>
							<ShareIcon /> Share
						</li>
					</ul>

					<MoreIcon />
				</div>
			</div>
		</>
	);
}

export default VideoPlayer;
