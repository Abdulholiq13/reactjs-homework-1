import './App.css';
import Header from './components/header/Header';
import Intro from './components/intro/Intro.jsx';
import Services from './components/services/Services.jsx';

function App() {
	return (
		<div className='App'>
			<Header />
			<Intro />
			<Services />
		</div>
	);
}

export default App;
