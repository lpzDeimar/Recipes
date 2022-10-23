import PropTypes from 'prop-types';

export const Togglebtn = ({ check, setCheck }) => {
	const onCheck = () => {
		console.log(check);
		setCheck();
	};
	return (
		<label className='switch'>
			<input
				type='checkbox'
				checked={check}
				onChange={() => {
					onCheck();
				}}
			/>
			<span className='slider round'></span>
		</label>
	);
};

Togglebtn.propTypes = {
	check: PropTypes.bool.isRequired,
	setCheck: PropTypes.func.isRequired,
};
