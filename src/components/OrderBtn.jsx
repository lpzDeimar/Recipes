export const OrderBtn = ({ setStatus }) => {
	const handleOrder = () => {
		setStatus(state => ({
			...state,
			stateFilter: state.stateFilter.sort((a, b) => a - b),
		}));
	};
	return (
		<>
			<button className='createBtn createBtn__left' onClick={handleOrder}>
				Order
			</button>
		</>
	);
};
