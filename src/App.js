import './App.css';
import Header from './components/header/Header';
import Intro from './components/intro/Intro.jsx';
import Services from './components/services/Services.jsx';
import About from './components/about/About.jsx';

function App() {
	return (
		<div className='App'>
			<Header />
			<Intro />
			<Services />
			<About />
		</div>
	);
}

export default App;
