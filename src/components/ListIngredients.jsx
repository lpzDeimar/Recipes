import { Fragment } from 'react';
import { ItemIngredients } from './';

import trashIcon from '/src/assets/svg/trash.svg'
import addIcon from '/src/assets/svg/add.svg'

export const ListIngredients = ({
	defaultState,
	setIngredient,
	ingredient,
}) => {
	const handleOnChange = (index, name, value) => {
		const copyRows = [...ingredient];
		copyRows[index] = {
			...copyRows[index],
			[name]: value,
		};
		setIngredient(copyRows);
	};

	const handleOnAdd = () => {
		setIngredient(ingredient.concat(defaultState));
	};

	const handleOnRemove = index => {
		const copyRows = [...ingredient];
		copyRows.splice(index, 1);
		setIngredient(copyRows);
	};

	return (
		<>
			<p>Ingredients</p>
			<fieldset className='formRecipe__group--ingrement'>
				{ingredient.map((row, index) => (
					<Fragment key={index}>
						{index + 1 !== ingredient.length ? (
							<ItemIngredients
								num={index + 1}
								{...row}
								onChange={(name, value) => handleOnChange(index, name, value)}
								onAction={() => handleOnRemove(index)}
								icon={trashIcon}
							/>
						) : (
							<ItemIngredients
								num={index + 1}
								{...row}
								onChange={(name, value) => handleOnChange(index, name, value)}
								onAction={() => handleOnAdd()}
								icon={addIcon}
							/>
						)}
					</Fragment>
				))}
			</fieldset>
		</>
	);
};
