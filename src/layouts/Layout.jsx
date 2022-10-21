import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
	return <section className='layout__main'>{children}</section>;
};

Layout.propTypes = {
	children: PropTypes.any.isRequired,
};
