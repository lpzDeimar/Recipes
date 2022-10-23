import { Stars } from './Stars';
import { Togglebtn } from './Togglebtn';

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
						viewEdit: true,
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
