import designIcon from '../../img/intro-design.svg';
import architectureIcon from '../../img/architecture.svg';
import planingIcon from '../../img/planing.svg';

import './Services.css';

const Services = () => {
	return (
		<section className='services'>
			<div className='container'>
				<p className='services__subtitle'>WHAT WE DO</p>
				<h2 className='services__title'>Our Service</h2>

				<div className='services__list'>
					<div className='services__item'>
						<img src={designIcon} alt='' width={40} height={40} />
						<span className='services__item-texts'>
							<h3 className='services__item-title'>Interior Design</h3>
							<p className='services__item-text'>
								Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut
								labore.
							</p>
						</span>
					</div>

					<div className='services__item item-brown'>
						<img src={architectureIcon} alt='' width={40} height={40} />
						<span className='services__item-texts'>
							<h3 className='services__item-title'>Architecture</h3>
							<p className='services__item-text item-brown-text'>
								Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut
								labore.
							</p>
						</span>
					</div>

					<div className='services__item'>
						<img src={planingIcon} alt='' width={40} height={40} />
						<span className='services__item-texts'>
							<h3 className='services__item-title'>Planning</h3>
							<p className='services__item-text'>
								Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor incididunt ut
								labore.
							</p>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
