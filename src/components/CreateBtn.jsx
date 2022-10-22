import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

export const CreateBtn = props => {
	const onClickButton = () => {
		props.setViModal(prevState => !prevState);
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
	setViModal: PropTypes.func.isRequired,
};
