import { Canvas, SettingBar, Toolbar } from './components';
import './styles/app.scss';

function App() {
	return (
		<div>
			<Toolbar />
			<SettingBar />
			<Canvas />
		</div>
	);
}

export default App;
