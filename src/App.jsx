import './App.css'
import Home from './pages/Home';
import Fav from './pages/Fav';
import MovieCard from './Component/MovieCard' 
import { Routes , Route } from 'react-router-dom';
function App() {
  

  const movieNumber = 1;
  return (
    <>

      {/* {movieNumber===1 && <MovieCard movie={{title:"Dhurander" ,release_date:2026}}/>} */}
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/fav' element={<Fav/>}/>
      </Routes>
        
    </>
  )
}

export default App
