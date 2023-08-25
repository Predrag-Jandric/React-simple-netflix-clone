import React from "react";
import "./app.css"
import Search from "./search.svg"
import Card from "./components/Card"

const API_URL = 'https://www.omdbapi.com?apikey=2bd69908'

function App() {

  const [movies, setMovies] = React.useState([])
  const [searchTerm, setSearchTerm] = React.useState()

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search);
  }
  React.useEffect(() => {
    searchMovies("all")
  }, [])


  return (
    <main className="app">
      <h1>Simple Netflix clone</h1>
      <p></p>

      <section className="search">
        <input type="text"
          placeholder="Search for movies, like Superman for example"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img src={Search} alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </section>

      <div className="container">
        {movies.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </main>
  );
}

export default App;
