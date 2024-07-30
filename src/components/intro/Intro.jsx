import introBg from '../../img/intro__content-bg-img.svg';
import ButtonGreen from '../button/Button-green.jsx';
import './Intro.css';

const Intro = () => {
	return (
		<section className='intro'>
			<div className='container intro__container'>
				<div className='intro__content-text'>
					<p className='intro__content-subtitle'>MODERN INTERIOR</p>
					<h2 className='intro__content-title'>Create Your Interior Design.</h2>
					<p className='intro__content-desc'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
					</p>
					<ButtonGreen />
				</div>
				<div className='intro__bg-wrapper'>
					<img className='intro__bg' src={introBg} alt='Intro bg' width={716} height={626} />
				</div>
			</div>
		</section>
	);
};

export default Intro;
