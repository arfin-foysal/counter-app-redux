import { Provider } from 'react-redux';
import './App.css';
import Counter from './components/Counter';
import { Store } from './components/Store';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
       <Counter/>
      </Provider>
    </div>
  );
}

export default App;
