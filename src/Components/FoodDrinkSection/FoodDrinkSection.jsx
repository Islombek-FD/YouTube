import React from 'react';
import './FoodDrinkSection.scss';
import { Link } from 'react-router-dom';
import TinySlider from 'tiny-slider-react';

import SubscribeButton from '../SubscribeButton/SubscribeButton.jsx';

import FoodDrinkLogo from '../../Assets/Images/food_drink.png';
import ArrowLeftIcon from '../Lib/ArrowLeftIcon.jsx';
import ArrowRightIcon from '../Lib/ArrowRightIcon.jsx';

function FoodDrinkSection({ videos }) {
	const settings = {
		container: 'food-drink-slider__container',
		controlsContainer: '.food-drink-slider__controlles',
		gutter: 40,
		items: 1,
		slideBy: 1,
		nav: false,
		mouseDrag: true,
		loop: true,
		autoplayTimeout: 2000,
		responsive: {
			576: {
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
			<section className='food-drink'>
				<div className='container'>
					<h2 className='visually-hidden'>
						Food and Drink videos list
					</h2>

					<div className='food-drink__brend'>
						<Link className='food-drink__link' to='/channel'>
							<img
								className='food-drink__image'
								src={FoodDrinkLogo}
								alt='Food Drink logo'
								width='50'
								height='50'
							/>

							<strong className='food-drink__heading'>
								Food & Drink
							</strong>
						</Link>
						<span className='food-drink__text'>
							Recommended channel for you
						</span>

						<SubscribeButton />
					</div>

					<div className='food-drink-slider__controlles slider__controlles'>
						<button className='slider__controlles-button prev'>
							<ArrowLeftIcon />
						</button>

						<button className='slider__controlles-button next'>
							<ArrowRightIcon />
						</button>
					</div>

					<div className='food-drink-slider__container'>
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
													alt='Food and drink img'
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

export default FoodDrinkSection;
