import {Route,Routes} from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';
import Favorite from './pages/Favorite/Favorite';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/favorites' element={<Favorite/>}/>
      </Routes>
    </div>
  );
}

export default App;
