import './App.css';
import Discussions from './component/Discussions.js';

function App() {
	return (
		<div className='main'>
			<h1>
				My Agora States <i className='fa-solid fa-code'></i>
			</h1>
			<Discussions />
		</div>
	);
}

export default App;
