import { useRef } from 'react';
import PropTypes from 'prop-types';
import { Togglebtn } from './Togglebtn';
import { ListIngredients } from './ListIngredients';

const autoHeight = event => {
	const heightText = event.target.scrollHeight;
	event.keyCode === 8
		? (event.target.style.height = `${heightText > 90 && heightText - 14}px`)
		: (event.target.style.height = `${heightText}px`);
};

export const FormRecipe = props => {
	const modal = useRef(null);

	const onClickButton = event => {
		if (event.target === modal.current) {
			props.setStatus(prevState => ({
				...prevState,
				viewAdd: !prevState.viewAdd,
			}));
		}
	};

	return (
		<section className='formRecipe' onClick={onClickButton} ref={modal}>
			<form
				data-aos='fade-left'
				data-aos-anchor='#example-anchor'
				data-aos-offset='500'
				data-aos-delay='300'
				data-aos-duration='500'>
				<h2>New recipe</h2>

				<p>Recipe name</p>
				<div className='formRecipe__group'>
					<label htmlFor=''>Title*</label>
					<input
						type='text'
						placeholder='E.g. Slow cooker beef and rice hot pot'
					/>
				</div>

				<ListIngredients />

				<p>Preparation</p>
				<div className='formRecipe__group'>
					<label htmlFor=''>Intructions*</label>
					<textarea
						onKeyUp={autoHeight}
						name=''
						id=''
						cols='30'
						placeholder='Write the steps'></textarea>
				</div>

				<p>Reviews</p>

				<fieldset className='start'>
					<input type='radio' name='start' />
					<label htmlFor=''>1</label>

					<input type='radio' name='start' />
					<label htmlFor=''>2</label>

					<input type='radio' name='start' />
					<label htmlFor=''>3</label>

					<input type='radio' name='start' />
					<label htmlFor=''>4</label>
				</fieldset>

				<p>Cooked before</p>
				<Togglebtn />
				<button className='btn' type='button'>
					Create
				</button>
			</form>
		</section>
	);
};

FormRecipe.propTypes = {
	setStatus: PropTypes.func.isRequired,
};
