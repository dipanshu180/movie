import './App.css'
import Home from './pages/Home';
import MovieCard from './Component/MovieCard' 
function App() {
  

  const movieNumber = 1;
  return (
    <>

      {/* {movieNumber===1 && <MovieCard movie={{title:"Dhurander" ,release_date:2026}}/>} */}
      <Home/>
    </>
  )
}

export default App
