// libreria para animaciones de scroll o carga de elementos
import Aos from 'aos';
import 'aos/dist/aos.css';
// libreria para notificaciones flotantes
import toast, { Toaster } from 'react-hot-toast';

import { useEffect, useReducer, useState } from 'react';
import {
	CreateBtn,
	FormRecipe,
	Modal,
	Table,
	RowRecipe,
	ViewRecipe,
	Togglebtn,
} from './components';
import { Barimg, Header, Layout, MainContent } from './layouts';

// estado inicial de las recetas
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
// creado para controlar las recetas unicamente
const reducer = (stateRecipes, action) => {
	switch (action.type) {
		case 'ADD':
			return [
				...stateRecipes,
				...action.payload, // [{new recipe}]
			];

		case 'TOGGLE':
			newState = [...stateRecipes];

			newState.splice(
				stateRecipes.indexOf(
					stateRecipes.find(item => item.id === action.payload[0].id)
				),
				1
			);
			console.log(...action.payload);
			return [...newState, ...action.payload].sort((a, b) =>
				a.id > b.id ? 1 : a.id < b.id ? -1 : 0
			);

		default:
			return [...stateRecipes];
	}
};
// actiontypes de las recetas
const actionTypes = {
	ADD: 'ADD',
	TOGGLE: 'TOGGLE',
};

export const App = () => {
	const [stateRecipes, dispatch] = useReducer(reducer, initialState);

	// actions of reducer recipes
	const onToggle = recipe => {
		dispatch({
			type: actionTypes.TOGGLE,
			payload: [{ ...recipe, state: !recipe.state }],
		});
	};

	const onAdd = recipe => {
		dispatch({
			type: actionTypes.ADD,
			payload: [recipe],
		});
	};

	// estado de la aplicacion
	const [status, setStatus] = useState({
		viewAdd: false,
		viewRecipe: false,
		viewView: false,
		viewEdit: false,
		visibleMenu: !false,
		select: 'All',
		recipeDispach: {},
		inputSearch: '',
		stateFilter: [],
	});

	useEffect(() => {
		Aos.init();
	}, []);

	useEffect(() => {
		const stateFilter = state => {
			const stateWithFilter = [...state].filter(item =>
				item.title.toLowerCase().includes(`${status.inputSearch}`)
			);

			if (stateWithFilter.length > 0) {
				return stateWithFilter;
			} else {
				toast('Recipe`t registered!', {
					icon: '📙',
					style: {
						borderRadius: '10px',
						background: '#333',
						color: '#fff',
					},
				});
				return [];
			}
		};

		setStatus({ ...status, stateFilter: stateFilter(stateRecipes) });
	}, [status.inputSearch, stateRecipes]);

	return (
		<>
			<Header />
			<Layout>
				<Toaster
					containerStyle={{ zIndex: 10000000 }}
					position='top-right'
					reverseOrder={true}
				/>
				<Barimg />
				<MainContent
					status={status}
					setStatus={setStatus}
					onSearch={search => {
						setStatus(prevState => ({
							...prevState,
							inputSearch: search,
						}));
					}}>
					<Table>
						{status.stateFilter.map((recipe, i) => (
							<RowRecipe
								recipe={recipe}
								onToggle={onToggle}
								setStatus={setStatus}
								key={recipe.id}
							/>
						))}
					</Table>
				</MainContent>
			</Layout>
			{status.viewRecipe && (
				<Modal>
					<ViewRecipe
						setStatus={setStatus}
						recipeDispach={status.recipeDispach}>
						<Togglebtn
							check={status.recipeDispach.state}
							setCheck={() => {
								onToggle(status.recipeDispach);
								setStatus(status => ({
									...status,
									viewRecipe: false,
								}));
							}}
						/>
					</ViewRecipe>
				</Modal>
			)}

			{(status.viewAdd || status.viewEdit) && (
				<Modal>
					<FormRecipe
						setStatus={setStatus}
						initialState={stateRecipes}
						onAdd={onAdd}
					/>
				</Modal>
			)}
			<Modal>
				<CreateBtn setStatus={setStatus} />
			</Modal>
		</>
	);
};
