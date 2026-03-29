import './App.css'
import Home from './pages/Home';
import Fav from './pages/Fav';
import MovieCard from './Component/MovieCard' 
import { Routes , Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
function App() { 
  
  return (
    <>

      {/* {movieNumber===1 && <MovieCard movie={{title:"Dhurander" ,release_date:2026}}/>} */}
      <div>
        <Navbar/>
        
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/fav' element={<Fav/>}/>

        </Routes>
        </main>
      </div>
        
    </>
  )
}

export default App
