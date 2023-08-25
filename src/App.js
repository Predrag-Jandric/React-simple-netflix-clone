import React from "react";
import "./app.css"
import Search from "./search.svg"
import Card from "./components/Card"

const API_URL = 'https://www.omdbapi.com?apikey=2bd69908'

function App() {

  const [movies, setMovies] = React.useState([])
  const [searchTerm, setSearchTerm] = React.useState()

  const example = {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  }

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search);
  }
  React.useEffect(() => {
    searchMovies("superman")
  }, [])

  return (
    <main className="app">
      <h1>MOvie Lnad</h1>

      <section className="search">
        <input type="text"
          placeholder="search for moview"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img src={Search} alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </section>



      <div className="container">
        {movies.map((movie) => (
          <Card movie={movie}/>
        ))}
      </div>
    </main>
  );
}

export default App;
