import PropTypes from 'prop-types';

export const ItemIngredients = ({
	onChange,
	onAction,
	ingredient,
	num,
	icon,
}) => {
	return (
		<label htmlFor=''>
			{num}
			<input
				name={`ingredientes${num}`}
				onChange={e => onChange('ingredient', e.target.value)}
				className='input__ingrement'
				type='text'
				required
				placeholder='Type ingredient'
				value={ingredient}
			/>
			<button type='button' onClick={onAction}>
				<img src={`${icon}`} />
			</button>
		</label>
	);
};

ItemIngredients.propTypes = {
	num: PropTypes.number.isRequired,
	icon: PropTypes.string.isRequired,
	ingredient: PropTypes.string.isRequired,
	onAction: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
};
