import React, { useContext } from "react";
import {UpcomingMoviesContext} from "../../contexts/upcomingMoviesContext";

const WatchListButton = ({ movie }) => {
  const context = useContext(UpcomingMoviesContext);

  const handleWatchList = e => {
    e.preventDefault();
    context.addToWatchList(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleWatchList}
    >
      Add to Watch List
    </button>
  );
};

export default WatchListButton;