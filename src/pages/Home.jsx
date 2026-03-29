import MovieCard from "../Component/MovieCard"
import { useState } from "react";

function Home(){

    const movies = [
        {id:1 , title:"Abba na mmane" , release_date: "2020"},
        {id:2 , title:"Babar kii billi" , release_date: "2021"},
        {id:3 , title:"Chuhiya maare billi" , release_date: "2022"},
        {id:4 , title:"Doodh peelo" , release_date: "2023"},
        {id:4 , title:"Doodh peelo" , release_date: "2023"},
    ]

    const [searchQuery , setSearchQuery] = useState("");

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
            <div className="movie-grid">{movies.map(movie => <MovieCard movie ={movie} key = {movie.id}/>)}</div>

        </div>
    )
}

export default Home