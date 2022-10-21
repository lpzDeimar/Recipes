import { FilterSearch } from '../components/FilterSearch';
import { InputSearch } from '../components/InputSearch';
import { InputSelect } from '../components/InputSelect';
import { Table } from '../components/Table';

export const MainContent = () => {
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

				<Table></Table>
			</section>
		</main>
	);
};
