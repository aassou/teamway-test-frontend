import SwitchLinks from './components/SwitchLinks';

// styling
import './assets/style/style.scss';
import './assets/style/general.scss'

const App = () => {
	const renderHelper = () => (
		<div className="bg-light">
			<SwitchLinks />
		</div>
	);

  	return (renderHelper());
};

export default App;
