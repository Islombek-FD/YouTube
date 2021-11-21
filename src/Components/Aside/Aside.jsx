import './Aside.scss';

import Nav from '../Nav/Nav.jsx';
import Subscriptions from '../Subscriptions/Subscriptions.jsx';
import Settings from '../Settings/Settings.jsx';

import useAside from '../../Hooks/useAside.js';

function Aside() {
	const [open] = useAside();

	return (
		<>
			<aside className={`menu ${open && 'menu-close'}`}>
				<Nav />

				<Subscriptions />

				<Settings />
			</aside>
		</>
	);
}

export default Aside;
