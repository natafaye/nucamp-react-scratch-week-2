export default function NewMovieMaker({ setMovies, movies, count, setCount }) {

    const addLegoMovie = () => {
        const legoMovie = {
            id: 5,
            title: "The Lego Movie"
        }

        // Rule: Cannot update state directly

        // BAD AND WRONG
        // movies.push(legoMovie)

        // call the function to add the lego movie
        // always have to work off copies for arrays

        // make a copy
        const copyOfMovies = movies.slice()
        // make our change to a copy
        copyOfMovies.push(legoMovie)
        // set the state to our updated copy
        setMovies(copyOfMovies)
    }

    return (
        <div>
            <button onClick={addLegoMovie}>Add Lego Movie to the List of Movies</button>
            <button onClick={() => setCount(count + 1)}>Add to Count</button>
        </div>
    )
}