export const Togglebtn = ({ check, setCheck }) => {
	// const [check, setCheck] = useState(false);
	// console.log(check);
	const onCheck = () => {
		console.log(check);
		setCheck();
	};
	return (
		<label className='switch'>
			<input
				type='checkbox'
				checked={check}
				onChange={() => {
					onCheck();
				}}
			/>
			<span className='slider round'></span>
		</label>
	);
};
