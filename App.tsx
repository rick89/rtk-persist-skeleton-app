import { store, persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Test from './component/test';

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Test />
			</PersistGate>
		</Provider>
	);
}
