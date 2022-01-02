import { Route, Switch } from 'react-router-dom';
import './App.css';

// components
import Navbar from './components/Navbar';
import ExpenseApp from './components/ExpenseApp';
import Cart from './components/Cart';

function App() {

  return (
    <div className="App">
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='route'>
          <Route path="/" component={ExpenseApp} /> 
        </div>
        <div>
          <Cart />
        </div>
    </div>
  );
}

export default App;
