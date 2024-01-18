import { Provider } from 'react-redux';
import Counter from './Components/counter';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;