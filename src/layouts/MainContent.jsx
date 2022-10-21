import { FilterSearch } from '../components/FilterSearch';
import { InputSearch } from '../components/InputSearch';
import { InputSelect } from '../components/InputSelect';
import { Togglebtn } from '../components/Togglebtn';

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

				<table>
					<thead>
						<tr>
							<th>prueba</th>
							<th>par ver </th>
							<th>si es aso</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>dasdasd</td>
							<td>⭐⭐⭐⭐⭐</td>
							<td>
								<Togglebtn></Togglebtn>
							</td>
						</tr>
					</tbody>
				</table>
			</section>
		</main>
	);
};
