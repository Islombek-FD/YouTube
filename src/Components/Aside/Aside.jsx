import './Aside.scss';

import Nav from '../Nav/Nav.jsx';
import Subscriptions from '../Subscriptions/Subscriptions.jsx';
import Settings from '../Settings/Settings.jsx';

import useAside from '../../Hooks/useAside.js';
import useTheme from '../../Hooks/useTheme.js';

function Aside() {
	const [theme] = useTheme();
	const [open] = useAside();

	return (
		<>
			<aside
				className={`menu ${open && 'menu-close'} ${
					theme === 'dark' && 'dark'
				}`}>
				<Nav />

				<Subscriptions />

				<Settings />
			</aside>
		</>
	);
}

export default Aside;
