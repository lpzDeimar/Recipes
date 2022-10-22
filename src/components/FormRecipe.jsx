import { useRef } from 'react';
import PropTypes from 'prop-types';
import { Togglebtn } from './Togglebtn';
import { ListIngredients } from './ListIngredients';

const autoHeight = event => {
	event.keyCode === 8
		? (event.target.style.height = `${
				event.target.scrollHeight > 90 && event.target.scrollHeight - 14
		  }px`)
		: (event.target.style.height = `${event.target.scrollHeight}px`);
};

export const FormRecipe = props => {
	const modal = useRef(null);

	const onClickButton = event => {
		if (event.target === modal.current) {
			props.setViModal(prevState => !prevState);
		}
	};

	return (
		<section className='formRecipe' onClick={onClickButton} ref={modal}>
			<article
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

					<input type='radio' name='start' />
					<label htmlFor=''>5</label>
				</fieldset>

				<p>Cooked before</p>
				<Togglebtn />

				<button className='btn '>Create</button>
			</article>
		</section>
	);
};

FormRecipe.propTypes = {
	setViModal: PropTypes.func.isRequired,
};
