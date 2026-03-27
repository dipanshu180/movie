import './App.css'
import MovieCard from './Component/MovieCard' 
function App() {
  

  const movieNumber = 1;
  return (
    <>

      {movieNumber===1 && <MovieCard movie={{title:"Dhurander" ,release_date:2026}}/>}
    </>
  )
}

export default App
