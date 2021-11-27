import './Settings.scss';

import content from '../../Localization/Content.js';
import useLang from '../../Hooks/useLang.js';

import SettingsIcon from '../Lib/SettingsIcon.jsx';

function Setting() {
	const [lang] = useLang();

	return (
		<>
			<div className='setting'>
				<SettingsIcon />

				<span className='setting__name'>
					{content[lang].home.settings}
				</span>
			</div>
		</>
	);
}

export default Setting;
