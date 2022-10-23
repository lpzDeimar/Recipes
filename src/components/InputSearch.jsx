import { useState } from 'react';
import PropTypes from 'prop-types';

export const InputSearch = ({ onSearch }) => {
	const [search, setSearch] = useState('');

	return (
		<div className='inputSearch'>
			<i
				onClick={() => {
					onSearch(search.toLowerCase());
					setSearch('');
				}}>
				<img src='./src/assets/svg/search.svg' alt='' />
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
				}}
			/>
		</div>
	);
};

InputSearch.propTypes = {
	onSearch: PropTypes.func.isRequired,
};
