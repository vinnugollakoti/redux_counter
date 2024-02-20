import { Provider } from 'react-redux';
import store from './Components/Store';
import Counter from './Components/Counter';
import "./App.css"
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
