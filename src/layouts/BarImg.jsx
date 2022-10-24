export const Barimg = () => {
	return (
		<figure className='barimg'>
			<picture>
				<source type='image/webp' srcSet='./src/assets/imgs/receta.webp' />
				<img
					// width='50rem'
					src='./src/assets/imgs/receta.jpeg'
					alt='un plato de una receta'
					loading='lazy'
				/>
			</picture>
		</figure>
	);
};
