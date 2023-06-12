import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import PropTypes from 'prop-types';

import searchIcon from '/src/assets/svg/search.svg'

export const InputSearch = ({ onSearch }) => {
	const [search, setSearch] = useState('');
	const [value] = useDebounce(search, 300);

	return (
		<div className='inputSearch'>
			<i
				onClick={() => {
					onSearch(search.toLowerCase());
					setSearch('');
				}}>
				<img src={searchIcon} alt='' />
			</i>
			<input
				onKeyDown={event => {
					if (event.keyCode === 13) {
						onSearch(search.toLowerCase());
						setSearch('');
					}
				}}
				type='text'
				placeholder='Search'
				value={search}
				onChange={() => {
					setSearch(event.target.value);
					if (value.length > 0) {
						onSearch(value.toLowerCase());
					}
				}}
			/>
		</div>
	);
};

InputSearch.propTypes = {
	onSearch: PropTypes.func.isRequired,
};
