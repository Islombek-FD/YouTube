import React from 'react';
import './SearchInput.scss';

import SearchIcon from '../Lib/SearchIcon.jsx';

function SearchInput() {
	const elInput = React.useRef();

	const inputFocus = () => elInput.current.focus();

	return (
		<div className='search'>
			<input
				className='search__input'
				ref={elInput}
				type='text'
				placeholder='Search'
			/>

			<SearchIcon inputFocus={inputFocus} />
		</div>
	);
}

export default SearchInput;
