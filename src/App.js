import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Navbar } from './components/navbar';
import {CreatePost} from './pages/create-post/CreatePost'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/> 
          <Route path='/login' element={<Login />}/>
          <Route path='/create' element={<CreatePost />}/> 
        </Routes>
      </Router>      
    </div>
  );
}

export default App;

