import aboutImg from '../../img/about-img.jpg';
import './About.css';

const About = () => {
	return (
		<section className='about'>
			<div className='container about__container'>
				<div className='about__img-wrapper'>
					<img src={aboutImg} alt='' width={681} height={726} />
				</div>
				<div className='about__content'>
					<p className='about__subtitle'>ABOUT US</p>
					<h2 className='about__title'>Interioris The Will of An Epoch Mextreo</h2>
					<p className='about__desc'>
						There are many variations of passages of Lorem Ipsum available, but the majority have suffered
						alteration in some form injected humour, or randomised words which don't look even slightly
						believable.If you are going to use a passage of Lorem Ipsum, sure there isn't anything
						embarrassing hidden the middleof text. All the Lorem Ipsum generators on the Internettend to
						repeat predefined chunks as necessary,making this the first true generator on the Internet.
					</p>
					<button className='button-green about__btn'>LEARN MORE</button>
				</div>
			</div>
		</section>
	);
};

export default About;
