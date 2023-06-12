import personalLogo from '/src/assets/imgs/logo.png'


export const Header = () => {
	return (
		<header className='header'>
			<a href='#'>
				<img
					src={personalLogo}
					alt='logo de tinkin'
				/>
			</a>
		</header>
	);
};
