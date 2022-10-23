import { FilterSearch } from '../components/FilterSearch';
import { InputSearch } from '../components/InputSearch';
import { InputSelect } from '../components/InputSelect';

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
