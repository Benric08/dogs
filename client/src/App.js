import {Route,Routes, useLocation} from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';
import Favorite from './pages/Favorite/Favorite';
import Detail from './pages/Detail/Detail';
import CreateDog from './pages/Forms/CreateDog';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';

function App() {

  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      
       {location.pathname!=='/'&&<NavBar/>}
        
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
