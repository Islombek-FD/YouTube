import React from 'react';
import './SearchInput.scss';

import content from '../../Localization/Content.js';
import useLang from '../../Hooks/useLang.js';

import SearchIcon from '../Lib/SearchIcon.jsx';

function SearchInput() {
	const [lang] = useLang();
	const elInput = React.useRef();

	const inputFocus = () => elInput.current.focus();

	return (
		<div className='search'>
			<input
				className='search__input'
				ref={elInput}
				type='text'
				placeholder={content[lang].header.search}
			/>

			<SearchIcon inputFocus={inputFocus} />
		</div>
	);
}

export default SearchInput;
