import PropTypes from 'prop-types';
import { FilterSearch, InputSearch, InputSelect } from '../components/';

export const MainContent = ({ onSearch, children, setStatus, status }) => {
	return (
		<main className='mainContent'>
			<section>
				<div>
					<h1>Kitchen Recipes</h1>
					<FilterSearch>
						<InputSearch onSearch={onSearch} />
						<InputSelect setStatus={setStatus} status={status} />
					</FilterSearch>
				</div>
				{children}
			</section>
		</main>
	);
};

MainContent.protoType = {
	onSearch: PropTypes.func.isRequired,
	children: PropTypes.any.isRequired,
	setStatus: PropTypes.func.isRequired,
	status: PropTypes.any.isRequired,
};
