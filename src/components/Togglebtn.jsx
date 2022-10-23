export const Togglebtn = ({ check, setCheck }) => {
	// const [check, setCheck] = useState(false);
	const onCheck = () => {
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
