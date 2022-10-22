import { useState } from 'react';

export const Togglebtn = () => {
	const [check, setCheck] = useState(false);

	return (
		<label className='switch'>
			<input
				type='checkbox'
				checked={check}
				onChange={() => {
					setCheck(!check);
				}}
			/>
			<span className='slider round'></span>
		</label>
	);
};
