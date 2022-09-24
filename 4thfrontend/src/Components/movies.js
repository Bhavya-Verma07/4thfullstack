import React from "react";
import { NavLink } from "react-router-dom";
// import Home from "./home";
import { useGlobalContext } from "./context";

const Movies = () => {
  const { movie } = useGlobalContext();
  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col container mx-auto">
          {movie.map((curMovie) => {
            const { imdbID, Title, Poster } = curMovie;
            const movieName = Title.subString(0, 15);
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card mx-auto">
                  <div className="card-info">
                    <h2>{movieName.length>15? `${movieName}...`: movieName}</h2>
                    <img src={Poster} alt={imdbID} srcSet="" />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Movies;
