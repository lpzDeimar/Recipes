import PropTypes from 'prop-types';

export const FilterSearch = ({ children }) => {
	return <div className='filterSearch'>{children}</div>;
};

FilterSearch.propTypes = {
	children: PropTypes.any.isRequired,
};
