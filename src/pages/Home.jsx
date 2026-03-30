import MovieCard from "../Component/MovieCard"
import { useState , useEffect, use} from "react";
import { searchMovies , getPopularMovies } from "../service/api";
import '../css/Home.css'

function Home(){

    const  [movies, setMovies] = useState([]);
    const [searchQuery , setSearchQuery] = useState("");
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(null);

    useEffect(()=> {
        const loadMovies = async () =>{
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }
            catch(error){
                console.error("Error fetching movies:", error);
                setError(error);
            }
            finally{
                setLoading(false);
        }
    }
    loadMovies();
    } , [])

    const handleSubmit = (e) =>{
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    };
    return(
        <div className="home">

            <form onSubmit={handleSubmit} className="search-form">
                <input type="text" placeholder="Search your movie..."  value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error">Error: {error.message}</div>}

            {loading ? (<div className="loading">Loading...</div> ):( 
            <div className="movie-grid">{movies.map(movie => <MovieCard movie ={movie} key = {movie.id}/>)}</div>)}

        </div>
    )
}

export default Home