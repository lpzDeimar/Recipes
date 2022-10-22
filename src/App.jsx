import { FormRecipe } from './components/FormRecipe';
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
				<MainContent />
			</Layout>

			<FormRecipe />
		</>
	);
};
