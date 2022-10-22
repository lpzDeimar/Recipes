import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { CreateBtn } from './components/CreateBtn';
import { FormRecipe } from './components/FormRecipe';
import { Modal } from './components/Modal';
import { Barimg } from './layouts/BarImg';
import { Header } from './layouts/Header';
import { Layout } from './layouts/Layout';
import { MainContent } from './layouts/MainContent';

export const App = () => {
	const [viModal, setViModal] = useState(false);

	useEffect(() => {
		// librerya para animar scroll y aparicion de elementos
		Aos.init();
	}, []);

	return (
		<>
			<Header />

			<Layout>
				<Barimg />
				<MainContent />
			</Layout>
			{viModal && (
				<Modal>
					<FormRecipe setViModal={setViModal} />
				</Modal>
			)}
			<Modal>
				<CreateBtn setViModal={setViModal} />
			</Modal>
		</>
	);
};
