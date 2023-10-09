import {Route,Routes} from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';
import Favorite from './pages/Favorite/Favorite';
import Detail from './pages/Detail/Detail';
import CreateDog from './pages/Forms/CreateDog';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/favorites' element={<Favorite/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/createdog' element={<CreateDog/>}/>
      </Routes>
    </div>
  );
}

export default App;
