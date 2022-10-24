import PropTypes from 'prop-types';

import { useRef } from 'react';
import { Stars } from './';

export const ViewRecipe = ({ recipeDispach, children, setStatus }) => {
	const modalView = useRef(null);

	const onClickButton = event => {
		if (event.target === modalView.current) {
			setStatus(prevState => ({
				...prevState,
				viewRecipe: false,
			}));
		}
	};

	const handleEdit = event => {
		setStatus(prevState => ({
			...prevState,
			viewEdit: true,
			viewRecipe: false,
		}));
	};

	return (
		<section className='modal' onClick={onClickButton} ref={modalView}>
			<article className='modal__bar modal__view'>
				<h2>{recipeDispach.title}</h2>

				<div className='modal__group'>
					<p>Ingredients</p>
					<ul>
						{recipeDispach.ingredientes.map((ingredient, i) => (
							<li key={`ingred${i}`}>{ingredient}</li>
						))}
					</ul>
				</div>

				<div className='modal__group'>
					<p>Preparation</p>
					<p className='paragraf'>{recipeDispach.preparacion}</p>
				</div>

				<div className='modal__group'>
					<p>Review</p>
					<Stars star={recipeDispach.star}></Stars>
				</div>

				<div className='modal__group'>
					<p>Copked before</p>
					{children}
				</div>
				<button
					onClick={() => {
						handleEdit();
					}}
					className='btn btnActi'>
					Edit
				</button>
			</article>
		</section>
	);
};

ViewRecipe.protoType = {
	recipeDispach: PropTypes.any.isRequired,
	children: PropTypes.any.isRequired,
	setStatus: PropTypes.func.isRequired,
};
