import './Subscriptions.scss';

import { NavLink } from 'react-router-dom';

// Subscriptions Users Image
import User1 from '../../Assets/Images/user1.png';
import User2 from '../../Assets/Images/user2.png';
import User3 from '../../Assets/Images/user3.png';
import User4 from '../../Assets/Images/user4.png';
import User5 from '../../Assets/Images/user5.png';
import User6 from '../../Assets/Images/user6.png';

function Subscriptions() {
	return (
		<>
			<div className='subscriptions'>
				<h3 className='subscriptions__heading'>Subscriptions</h3>

				<ul className='subscriptions__list'>
					<li className='subscription__item'>
						<NavLink className='subscription__link' to='/channel'>
							<img
								src={User1}
								alt='Subscribed user img'
								width='26'
								height='26'
							/>

							<strong className='subscription__name'>
								Gussie Singleton
							</strong>
						</NavLink>
					</li>

					<li className='subscription__item'>
						<NavLink className='subscription__link' to='/channel'>
							<img
								src={User2}
								alt='Subscribed user img'
								width='26'
								height='26'
							/>

							<strong className='subscription__name'>
								Nora Francis
							</strong>
						</NavLink>
					</li>

					<li className='subscription__item'>
						<NavLink className='subscription__link' to='/channel'>
							<img
								src={User3}
								alt='Subscribed user img'
								width='26'
								height='26'
							/>

							<strong className='subscription__name'>
								Belle Briggs
							</strong>
						</NavLink>
					</li>

					<li className='subscription__item'>
						<NavLink className='subscription__link' to='/channel'>
							<img
								src={User4}
								alt='Subscribed user img'
								width='26'
								height='26'
							/>

							<strong className='subscription__name'>
								Eunice Cortez
							</strong>
						</NavLink>
					</li>

					<li className='subscription__item'>
						<NavLink className='subscription__link' to='/channel'>
							<img
								src={User5}
								alt='Subscribed user img'
								width='26'
								height='26'
							/>

							<strong className='subscription__name'>
								Emma Hanson
							</strong>
						</NavLink>
					</li>

					<li className='subscription__item'>
						<NavLink className='subscription__link' to='/channel'>
							<img
								src={User6}
								alt='Subscribed user img'
								width='26'
								height='26'
							/>

							<strong className='subscription__name'>
								Leah Berry
							</strong>
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
}

export default Subscriptions;
