import { Togglebtn } from '../components/Togglebtn';

export const MainContent = () => {
	return (
		<main className='mainContent'>
			<section>
				<div>
					<h1>Kitchen Recipes</h1>
					<div>
						<i>
							<img src='./src/assets/svg/search.svg' alt='' />
						</i>
						<input type='text' />
					</div>
					<select name='' id=''>
						<option value=''>All</option>
						<option value=''>Activge</option>
						<option value=''>Inactive</option>
					</select>
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
