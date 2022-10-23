import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useReducer, useState } from 'react';
import { CreateBtn } from './components/CreateBtn';
import { FormRecipe } from './components/FormRecipe';
import { Modal } from './components/Modal';
import { Barimg } from './layouts/BarImg';
import { Header } from './layouts/Header';
import { Layout } from './layouts/Layout';
import { MainContent } from './layouts/MainContent';
import { Table } from './components/Table';
import { Togglebtn } from './components/Togglebtn';
import { Stars } from './components/Stars';

const initialState = [
	{
		id: 1,
		title: 'Budin de frutos secos',
		ingredientes: [
			'1⅓ tazas de harina 0000',
			'1 huevo',
			'½ taza de agua (120 mililitros)',
			'⅓ taza de aceite',
			'⅓ taza de azúcar (66 gramos)',
			'30 gramos de frutos secos',
		],
		preparacion:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non modi porro aliquid, quae natus repudiandae fugiat, ea at, molestias odio eum? Consectetur harum maiores nemo quo, voluptatem fuga quia error.',

		star: 3,
		state: true,
	},
	{
		id: 2,
		title: 'Castañas asadas al microondas',
		ingredientes: [
			'30 gramos de frutos secos',
			'⅓ taza de aceite',
			'1⅓ tazas de harina 0000',
			'1 huevo',
		],
		preparacion:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non modi porro aliquid, quae natus repudiandae fugiat, ea at, molestias odio eum? Consectetur harum maiores nemo quo, voluptatem fuga quia error.',

		star: 4,
		state: true,
	},
	{
		id: 4,
		title: 'Receta de crema de boniato',
		ingredientes: ['1⅓ tazas de harina 0000'],
		preparacion:
			'Lorem ipsum m ipsum dolor sit amet consectetur adipisicing elit. Non modi porro aliquid, quae natus repudiandae fugiat, ea at, molestias odio eum? Consectetur harum maiores nemo quo, vol  m ipsum dolor sit amet consectetur adipisicing elit. Non modi porro aliquid, quae natus repudiandae fugiat, ea at, molestias odio eum? Consectetur harum maiores nemo quo, voldolor sit amet consectetur adipisicing elit. Non modi porro aliquid, quae natus repudiandae fugiat, ea at, molestias odio eum? Consectetur harum maiores nemo quo, voluptatem fuga quia error.',

		star: 1,
		state: false,
	},

	{
		id: 5,
		title: 'Receta de pastel',
		ingredientes: ['1⅓ tazas de harina'],
		preparacion:
			'Lorem ipsum m ipsum dolor sit amet consectetur adipisicing elit. Non modi porro aliquid, quae natus repudiandae fugiat, ea at, molestias odio eum? Consectetur harum maiores nemo quo, vol  m ipsum dolor sit amet consectetur adipisicing elit. Non modi porro aliquid, quae natus repudiandae fugiat, ea at, molestias odio eum? Consectetur harum maiores nemo quo, voldolor sit amet consectetur adipisicing elit. Non modi porro aliquid, quae natus repudiandae fugiat, ea at, molestias odio eum? Consectetur harum maiores nemo quo, voluptatem fuga quia error.',

		star: 2,
		state: true,
	},
];

let newState;

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return [
				...state,
				...action.payload, // [{new recipe}]
			];

		case 'EDIT':
			return [...state, ...action.payload];

		case 'FILTERSTATE':
			return [...action.payload];

		case 'TOGGLE':
			newState = [...state];

			newState.splice(
				state.indexOf(state.find(item => item.id === action.payload[0].id)),
				1
			);
			return [...newState, ...action.payload].sort((a, b) =>
				a.id > b.id ? 1 : a.id < b.id ? -1 : 0
			);
		default:
			return [...state];
	}
};

const actionTypes = {
	ADD: 'ADD',
	EDIT: 'EDIT',
	TOGGLE: 'TOGGLE',
	FILTERSTATE: 'FILTERSTATE',
};

export const App = () => {
	const [status, setStatus] = useState({
		viewAdd: false,
		viewView: false,
		viewEdit: false,
		recipeDispach: {},
	});

	const [state, dispatch] = useReducer(reducer, initialState);

	const onToggle = recipe => {
		dispatch({
			type: actionTypes.TOGGLE,
			payload: [{ ...recipe, state: !recipe.state }],
		});
	};

	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<>
			<Header />
			<Layout>
				<Barimg />
				<MainContent>
					<Table>
						{state.map((recipe, i) => (
							<tr
								className={`recipe ${recipe.state ? 'active' : 'inactive'}`}
								key={recipe.id}
								onClick={() => {
									if (
										`${event.target.localName}` !== 'span' &&
										`${event.target.localName}` !== 'input'
									) {
										setStatus({
											...status,
											viewEdit: true,
											recipeDispach: recipe,
										});
									}
								}}>
								<td>{recipe.title}</td>
								<td>{<Stars star={recipe.star} />}</td>
								<td>
									<Togglebtn
										check={recipe.state}
										setCheck={() => {
											onToggle(recipe);
										}}
									/>
								</td>
							</tr>
						))}
					</Table>
				</MainContent>
			</Layout>
			{
				<Modal>
					<code>{JSON.stringify(status.recipeDispach)}</code>
				</Modal>
			}
			{status.viewAdd && (
				<Modal>
					<FormRecipe setStatus={setStatus} />
				</Modal>
			)}
			<Modal>
				<CreateBtn setStatus={setStatus} />
			</Modal>
		</>
	);
};
