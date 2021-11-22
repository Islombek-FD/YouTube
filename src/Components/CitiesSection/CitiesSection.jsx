import React from 'react';
import './CitiesSection.scss';
import { Link } from 'react-router-dom';
import TinySlider from 'tiny-slider-react';

import ArrowLeftIcon from '../Lib/ArrowLeftIcon.jsx';
import ArrowRightIcon from '../Lib/ArrowRightIcon.jsx';

import DollieBlair from '../../Assets/Images/dollie_blair.png';

function CitiesSection({ videos }) {
	const settings = {
		container: 'cities__slider-container',
		controlsContainer: '.cities__slider-controlles',
		gutter: 40,
		items: 1,
		slideBy: 1,
		nav: false,
		mouseDrag: true,
		loop: true,
		autoplayTimeout: 2000,
		responsive: {
			280: {
				items: 1,
			},
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
			<section className='cities-slider'>
				<div className='container'>
					<h2 className='visually-hidden'>Cities videos list</h2>

					<Link className='city-slider__user' to='/channel'>
						<img
							src={DollieBlair}
							alt='Dollie Blair img'
							width='50'
							height='50'
						/>

						<strong className='city-slider__user-name'>
							Dollie Blair
						</strong>
					</Link>

					<div className='cities__slider-controlles slider__controlles'>
						<button className='slider__controlles-button prev'>
							<ArrowLeftIcon />
						</button>

						<button className='slider__controlles-button next'>
							<ArrowRightIcon />
						</button>
					</div>

					<div className='cities__slider-container'>
						<ul className='slider__list'>
							<TinySlider settings={settings}>
								{videos &&
									videos.map((video) => (
										<li
											className='slider__item'
											key={video.id}>
											<Link
												className='slider__item-link'
												to={`/channel/${video.id}`}>
												<img
													className='slider__item-image'
													src={video.thumbnailUrl}
													alt='City img'
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
														80k views · 3 days ago{' '}
													</span>

													<span className='slider__item-text'>
														Dollie Blair
													</span>
												</div>
											</Link>
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

export default CitiesSection;
