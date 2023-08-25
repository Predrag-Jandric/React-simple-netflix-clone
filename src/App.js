import React from "react";
import "./app.css"
import Search from "./search.svg"
import Card from "./components/Card"

const API_URL = 'https://www.omdbapi.com?apikey=2bd69908'

function App() {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    console.log(data.Search);
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
          value="superman"
          onChange={() => { }}
        />

        <img src={Search} alt="search"
          onClick={() => { }}
        />
      </section>

        <Card/>
    </main>
  );
}

export default App;
