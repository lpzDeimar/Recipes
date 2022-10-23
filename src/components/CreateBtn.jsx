import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

export const CreateBtn = props => {
	const onClickButton = () => {
		props.setStatus(prevState => ({
			...prevState,
			viewAdd: !prevState.viewAdd,
		}));
	};

	return (
		<>
			<button
				data-tip
				data-for='createBtn'
				className='createBtn'
				onClick={onClickButton}>
				<img src='./src/assets/svg/more.svg' alt='' />
			</button>
			<ReactTooltip id='createBtn'>Add Recipe</ReactTooltip>
		</>
	);
};

CreateBtn.propTypes = {
	setStatus: PropTypes.func.isRequired,
};
