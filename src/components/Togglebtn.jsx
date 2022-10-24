export const Togglebtn = ({
	check,
	setCheck,
	register = () => {},
	add = false,
}) => {
	const onCheck = () => {
		console.log(check);
		setCheck();
	};

	return (
		<label className='switch'>
			{!add ? (
				<input
					type='checkbox'
					checked={check}
					onChange={() => {
						onCheck();
					}}
				/>
			) : (
				<input {...register('state')} type='checkbox' />
			)}
			<span className='slider round'></span>
		</label>
	);
};
