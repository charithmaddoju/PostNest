import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/> 
          <Route path='/login' element={<Login />}/> 
        </Routes>
      </Router>      
    </div>
  );
}

export default App;

