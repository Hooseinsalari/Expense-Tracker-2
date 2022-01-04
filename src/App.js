import { Route, Switch } from 'react-router-dom';
import './App.css';

// components
import Navbar from './components/Navbar';
import ExpenseApp from './components/ExpenseApp';
import About from './components/About';
import Chart from './components/Chart';

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
          <About />
        </div>
    </div>
  );
}

export default App;
