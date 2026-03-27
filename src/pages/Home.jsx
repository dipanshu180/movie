import MovieCard from "../Component/MovieCard"

function Home(){

    const movies = [
        {id:1 , title:"A" , release_date: "2020"},
        {id:2 , title:"B" , release_date: "2021"},
        {id:3 , title:"C" , release_date: "2022"},
        {id:4 , title:"D" , release_date: "2023"},
    ]

    const handleSubmit = () =>{};
    return(
        <div className="home">

            <form onSubmit={handleSubmit} className="search-form">
                <input type="text" placeholder="Search your movie..." />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movie-grid">{movies.map(movie => <MovieCard movie ={movie} key = {movie.id}/>)}</div>

        </div>
    )
}

export default Home