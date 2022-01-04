import { Route, Switch } from 'react-router-dom';
import './App.css';

// components
import Navbar from './components/Navbar';
import ExpenseApp from './components/ExpenseApp';
import About from './components/About';

function App() {

  return (
    <div className="App">
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='route'>
          {/* <Route path="/about" component={About} /> */}
          <Route path="/" component={ExpenseApp} exact /> 
        </div>
    </div>
  );
}

export default App;
