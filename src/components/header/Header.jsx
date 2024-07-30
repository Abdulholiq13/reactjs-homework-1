import logo from '../../img/logo.svg';
import './Header.css';

const Header = () => {
	return (
		<header className='header'>
			<div className='container header__container'>
				<a id='header-logo' href='../../index.js'>
					<img src={logo} alt='Header logo img' />
				</a>

				<nav className='navbar'>
					<ul className='navbar__list'>
						<li className='navbar__item'>
							<a className='navbar__link active__link' href='#home'>
								HOME
							</a>
						</li>
						<li className='navbar__item'>
							<a className='navbar__link' href='#project'>
								PROJECT
							</a>
						</li>
						<li className='navbar__item'>
							<a className='navbar__link' href='#services'>
								SERVICES
							</a>
						</li>
						<li className='navbar__item'>
							<a className='navbar__link' href='#about'>
								ABOUT
							</a>
						</li>
						<li className='navbar__item'>
							<a className='navbar__link' href='#blog'>
								BLOG
							</a>
						</li>
						<li className='navbar__item'>
							<a className='navbar__link' href='#shop'>
								SHOP
							</a>
						</li>
						<li className='navbar__item'>
							<a className='navbar__link' href='#contact'>
								CONTACT
							</a>
						</li>
					</ul>
				</nav>

				<button className='header__btn'>Sign Up</button>
			</div>
		</header>
	);
};

export default Header;
