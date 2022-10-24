import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Togglebtn, ListIngredients } from './';
import { useForm } from 'react-hook-form';

const autoHeight = event => {
	const heightText = event.target.scrollHeight;
	event.keyCode === 8
		? (event.target.style.height = `${heightText > 90 && heightText - 14}px`)
		: (event.target.style.height = `${heightText}px`);
};

export const FormRecipe = props => {
	const modal = useRef(null);

	const defaultState = {
		ingredient: '',
	};

	const [ingredient, setIngredient] = useState([defaultState]);

	const onClickButton = event => {
		if (event.target === modal.current) {
			props.setStatus(prevState => ({
				...prevState,
				viewEdit: false,
				viewAdd: false,
			}));
		}
	};

	const {
		register,
		handleSubmit,
		reset,
		formState: { isValid, errors },
	} = useForm({
		mode: 'onSubmit',
	});

	const onSubmit = data => {
		props.onAdd({
			...data,
			star: parseInt(data.star),
			id: props.initialState[props.initialState.length - 1].id + 1,
			ingredientes: ingredient.map(item => item.ingredient),
		});

		props.setStatus(status => ({
			...status,
			viewAdd: false,
		}));

		reset();
	};

	return (
		<section className='modal' onClick={onClickButton} ref={modal}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='modal__bar'
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
						{...register('title', {
							required: true,
							maxLength: 100,
						})}
						type='text'
						placeholder='E.g. Slow cooker beef and rice hot pot'
					/>
					{errors.title?.type === 'required' && (
						<p className='warningForm'>Name required</p>
					)}
					{errors.title?.type === 'maxLength' && (
						<p className='warningForm'>maximum 100 characters</p>
					)}
				</div>

				<ListIngredients
					defaultState={defaultState}
					ingredient={ingredient}
					setIngredient={setIngredient}
				/>

				<p>Preparation</p>
				<div className='formRecipe__group'>
					<label htmlFor=''>Intructions*</label>
					<textarea
						onKeyUp={autoHeight}
						{...register('preparacion', {
							required: true,
							minLength: 20,
						})}
						cols='30'
						placeholder='Write the st eps'></textarea>
					{errors.preparacion?.type === 'required' && (
						<p className='warningForm'>Instructions required</p>
					)}
					{errors.preparacion?.type === 'minLength' && (
						<p className='warningForm'>Minimum 20 characters</p>
					)}
				</div>

				<p>Reviews</p>

				<fieldset className='start'>
					<input
						type='radio'
						{...register('star', { required: true })}
						value={1}
					/>
					<label htmlFor=''>1</label>

					<input
						type='radio'
						{...register('star', { required: true })}
						value={2}
					/>
					<label htmlFor=''>2</label>

					<input
						type='radio'
						{...register('star', { required: true })}
						value={3}
					/>
					<label htmlFor=''>3</label>

					<input
						type='radio'
						{...register('star', { required: true })}
						value={4}
					/>
					<label htmlFor=''>4</label>
				</fieldset>
				{errors.star?.type === 'required' && (
					<p className='warningForm'>Reviews required</p>
				)}

				<p>Cooked before</p>
				<Togglebtn register={register} add={true} />
				<button className={`btn ${isValid ? 'btnActi' : ''} `} type='submit'>
					Create
				</button>
			</form>
		</section>
	);
};

FormRecipe.propTypes = {
	setStatus: PropTypes.func.isRequired,
};
