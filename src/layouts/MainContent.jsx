import { FilterSearch } from '../components/FilterSearch';
import { InputSearch } from '../components/InputSearch';
import { InputSelect } from '../components/InputSelect';

export const MainContent = ({ children }) => {
	return (
		<main className='mainContent'>
			<section>
				<div>
					<h1>Kitchen Recipes</h1>
					<FilterSearch>
						<InputSearch />
						<InputSelect />
					</FilterSearch>
				</div>
				{children}
			</section>
		</main>
	);
};
