import { Route } from 'react-router-dom';
import './App.css';

// components
import Navbar from './components/Navbar';
import ExpenseApp from './components/ExpenseApp';
import About from './components/About';

// toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='route'>
          <Route path="/about" component={About} />
          <Route path="/" component={ExpenseApp} exact /> 
        </div>
      <ToastContainer />

    </div>
  );
}

export default App;
