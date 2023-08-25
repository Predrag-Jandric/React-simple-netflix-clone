import React from 'react'

function Card() {

    const example = {
        "Title": "Batman v Superman: Dawn of Justice",
        "Year": "2016",
        "imdbID": "tt2975590",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      }

  return (
    <section className="container">
    <article className="movie">
     <div>
       <p>{example.Year}</p>
     </div>

     <div>
       <img src={example.Poster !== 'N/A' ? example.Poster : "https://via.placeholder.com/400"} alt={example.Title} />
     </div>

     <div>
       <span>{example.Type}</span>
       <h3>{example.Title}</h3>
     </div>
    </article>
   </section>
  )
}

export default Card
