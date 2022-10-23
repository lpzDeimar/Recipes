import { useState } from 'react';

export const InputSelect = () => {
	const [select, setSelect] = useState('All');
	const [visibleMenu, setVisibleMenu] = useState(true);

	const onFilterState = filt => {
		document.querySelectorAll('.recipe').forEach(item => {
			item.classList.remove('displaynone');

			if (filt === 'Active') {
				document.querySelectorAll('.inactive').forEach(item => {
					item.classList.add('displaynone');
				});
			}
			if (filt === 'Inactive') {
				document.querySelectorAll('.active').forEach(item => {
					item.classList.add('displaynone');
				});
			}
		});
	};

	const handlerInputRadio = event => {
		setSelect(event.target.value);
		setVisibleMenu(!visibleMenu);
		onFilterState(event.target.value);
	};

	return (
		<div className='inputSelect'>
			<button
				onClick={() => {
					setVisibleMenu(!visibleMenu);
				}}>
				Cooked before: <span> {select}</span>
				<img src='./src/assets/svg/arrow.svg' alt='' />
			</button>
			<div className={` inputSelect__menu ${visibleMenu ? 'displaynone' : ''}`}>
				<div>
					<label htmlFor='All'>All</label>
					<input
						id='All'
						name='cooked'
						type='radio'
						value='All'
						onClick={handlerInputRadio}
					/>
				</div>
				<div>
					<label htmlFor='Active'>Active</label>
					<input
						id='Active'
						name='cooked'
						type='radio'
						value='Active'
						onClick={handlerInputRadio}
					/>
				</div>
				<div>
					<label htmlFor='Inactive'>Inactive</label>
					<input
						id='Inactive'
						name='cooked'
						type='radio'
						value='Inactive'
						onClick={handlerInputRadio}
					/>
				</div>
			</div>
		</div>
	);
};
