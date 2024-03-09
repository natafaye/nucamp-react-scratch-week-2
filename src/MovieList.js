
export default function MovieList({ listOfMovies}) {
    
    return (
        <div>{listOfMovies.map(movie => <div key={movie.id}>{movie.title}</div>)}</div>
    )
}