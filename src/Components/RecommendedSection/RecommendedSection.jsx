import React from 'react';
import './RecommendedSection.scss';
import TinySlider from 'tiny-slider-react';

import ArrowLeftIcon from '../Lib/ArrowLeftIcon.jsx';
import ArrowRightIcon from '../Lib/ArrowRightIcon.jsx';

function RecommendedSection({ videos }) {
	const settings = {
		container: '.recommended__slider-container',
		controlsContainer: '.recommended__slider-controlles',
		gutter: 40,
		items: 1,
		slideBy: 1,
		nav: false,
		mouseDrag: true,
		loop: true,
		autoplayTimeout: 2000,
		responsive: {
			800: {
				items: 2,
			},
			1560: {
				items: 3,
			},
			1940: {
				items: 4,
			},
		},
	};

	return (
		<>
			<section className='recommended'>
				<h2 className='visually-hidden'>Recommended videos list</h2>

				<div className='container'>
					<h3 className='recommended__heading'>Recommended</h3>

					<div className='recommended__slider-controlles slider__controlles'>
						<button className='slider__controlles-button prev'>
							<ArrowLeftIcon />
						</button>

						<button className='slider__controlles-button next'>
							<ArrowRightIcon />
						</button>
					</div>

					<div className='recommended__slider-container'>
						<ul className='slider__list'>
							<TinySlider settings={settings}>
								{videos &&
									videos.map((video) => (
										<li
											className='slider__item'
											key={video.id}>
											<img
												className='slider__item-image'
												src={video.url}
												alt=''
												width='540'
												height='250'
											/>

											<h4 className='slider__item-title'>
												{video.title
													.split(' ')
													.slice(0, 8)
													.join(' ')}
											</h4>

											<div className='slider__item-views'>
												<span className='slider__item-text'>
													34k views · 5 months ago{' '}
												</span>

												<span className='slider__item-text'>
													Gussie French
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

export default RecommendedSection;
