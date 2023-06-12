import bannerImg from '/src/assets/imgs/receta.webp'

export const Barimg = () => {

	return (
		<figure className='barimg'>
			<picture>
				<source type='image/webp' srcSet={bannerImg} />
				<img
					// width='50rem'
					src={bannerImg}
					alt='un plato de una receta'
					loading='lazy'
				/>
			</picture>
		</figure>
	);
};
