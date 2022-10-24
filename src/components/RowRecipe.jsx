import PropTypes from 'prop-types';

import { Stars, Togglebtn } from './';

export const RowRecipe = ({ recipe, onToggle, setStatus }) => {
	return (
		<tr
			className={`recipe ${recipe.state ? 'active' : 'inactive'}`}
			onClick={() => {
				if (
					`${event.target.localName}` !== 'span' &&
					`${event.target.localName}` !== 'input'
				) {
					setStatus(status => ({
						...status,
						viewRecipe: true,
						recipeDispach: recipe,
					}));
				} else {
					setStatus(status => ({
						...status,
						viewRecipe: false,
						recipeDispach: recipe,
					}));
				}
			}}>
			<td>{recipe.title}</td>
			<td>{<Stars star={recipe.star} />}</td>
			<td>
				<Togglebtn
					check={recipe.state}
					setCheck={() => {
						onToggle(recipe);
					}}
				/>
			</td>
		</tr>
	);
};

RowRecipe.propTypes = {
	recipe: PropTypes.any.isRequired,
	onToggle: PropTypes.func.isRequired,
	setStatus: PropTypes.func.isRequired,
};
