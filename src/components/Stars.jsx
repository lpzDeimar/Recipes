export const Stars = ({ star }) => {
	return (
		<div className='stars'>
			<img
				src={`./src/assets/svg/star${star < 1 ? 'In' : ''}active.svg`}
				alt='star de puntuar'
			/>
			<img
				src={`./src/assets/svg/star${star < 2 ? 'In' : ''}active.svg`}
				alt='star de puntuar'
			/>
			<img
				src={`./src/assets/svg/star${star < 3 ? 'In' : ''}active.svg`}
				alt='star de puntuar'
			/>
			<img
				src={`./src/assets/svg/star${star < 4 ? 'In' : ''}active.svg`}
				alt='star de puntuar'
			/>
		</div>
	);
};
