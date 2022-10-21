import { Barimg } from './layouts/BarImg';
import { Header } from './layouts/Header';
import { Layout } from './layouts/Layout';
import { MainContent } from './layouts/MainContent';

export const App = () => {
	return (
		<>
			<Header />

			<Layout>
				<Barimg />
				<MainContent></MainContent>
			</Layout>
			<article>
				<h2>enw recipe</h2>
				<input type='text' />
				<fieldset>
					<label>ingredients</label>
					<input type='text' />
					<input type='text' />
				</fieldset>
				<label htmlFor='Preparatio'></label>
				<textarea name='' id='' cols='30' rows='10'></textarea>
				<p>alsdasd</p>
				<label htmlFor=''>1</label>
				<input type='checkbox' />

				<label htmlFor=''>2</label>
				<input type='checkbox' />

				<label htmlFor=''>3</label>
				<input type='checkbox' />

				<label htmlFor=''>4</label>
				<input type='checkbox' />

				<label htmlFor=''>5</label>
				<input type='checkbox' />

				<label htmlFor=''>asdds</label>
				<button>dsad</button>
			</article>
		</>
	);
};
