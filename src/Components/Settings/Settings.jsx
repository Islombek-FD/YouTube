import './Settings.scss';

import SettingsIcon from '../Lib/SettingsIcon.jsx';

function Setting() {
	return (
		<>
			<div className='setting'>
				<SettingsIcon />

				<span className='setting__name'>Setting</span>
			</div>
		</>
	);
}

export default Setting;
