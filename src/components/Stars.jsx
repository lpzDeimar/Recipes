import PropTypes from 'prop-types';

import startActive from '/src/assets/svg/staractive.svg'
import startInActive from '/src/assets/svg/starInactive.svg'

export const Stars = ({ star }) => {
	return (
		<div className='stars'>
			<img
				src={`${star < 1 ? startInActive : startActive}`}
				alt='star de puntuar'
			/>
			<img
				src={`${star < 2 ? startInActive : startActive}`}
				alt='star de puntuar'
			/>
			<img
				src={`${star < 3 ? startInActive : startActive}`}
				alt='star de puntuar'
			/>
			<img
				src={`${star < 4 ? startInActive : startActive}`}
				alt='star de puntuar'
			/>
		</div>
	);
};

Stars.propTypes = {
	star: PropTypes.number.isRequired,
};
