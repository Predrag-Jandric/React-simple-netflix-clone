import React from 'react'

function Card({movie}) {

    return (
        <main className="container">
            <section className="movie">
                <div>
                    <p>{movie.Year}</p>
                </div>

                <div>
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
                </div>

                <div>
                    <span>{movie.Type}</span>
                    <h3>{movie.Title}</h3>
                </div>
            </section>
        </main>
    )
}

export default Card
