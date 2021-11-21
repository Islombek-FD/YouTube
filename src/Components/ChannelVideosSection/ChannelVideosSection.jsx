import React from 'react';
import './ChannelVideosSection.scss';
import TinySlider from 'tiny-slider-react';

import ArrowLeftIcon from '../Lib/ArrowLeftIcon.jsx';
import ArrowRightIcon from '../Lib/ArrowRightIcon.jsx';

function ChannelVideosSection({ videos }) {
	const settings = {
		container: '.channel-videos-slider__container',
		controlsContainer: '.channel-videos-slider__controlles',
		gutter: 40,
		items: 1,
		slideBy: 1,
		nav: false,
		mouseDrag: true,
		loop: true,
		autoplayTimeout: 2000,
		responsive: {
			600: {
				items: 2,
			},
			910: {
				items: 3,
			},
			1320: {
				items: 4,
			},
			1620: {
				items: 5,
			},
			1890: {
				items: 6,
			},
		},
	};

	return (
		<>
			<section className='channel-videos'>
				<div className='container'>
					<h2 className='channel-videos__heading'>
						Margaret Phelps videos
					</h2>

					<div className='channel-videos-slider__controlles slider__controlles'>
						<button className='slider__controlles-button prev'>
							<ArrowLeftIcon />
						</button>

						<button className='slider__controlles-button next'>
							<ArrowRightIcon />
						</button>
					</div>

					<div className='channel-videos-slider__container'>
						<ul className='slider__list'>
							<TinySlider settings={settings}>
								{videos &&
									videos.map((video) => (
										<li
											className='slider__item'
											key={video.id}>
											<img
												className='slider__item-image'
												src={video.thumbnailUrl}
												alt=''
												width='250'
												height='150'
											/>

											<h4 className='slider__item-title'>
												{video.title
													.split(' ')
													.slice(0, 3)
													.join(' ')}
											</h4>

											<div className='slider__item-views'>
												<span className='slider__item-text'>
													13k views · 15 days ago{' '}
												</span>

												<span className='slider__item-text'>
													Food & Drink
												</span>
											</div>
										</li>
									))}
							</TinySlider>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}

export default ChannelVideosSection;
