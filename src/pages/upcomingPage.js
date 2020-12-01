import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {UpcomingMoviesContext} from '../contexts/upcomingMoviesContext'
import WatchListButton from '../components/buttons/addToWatchList'

const UpcomingPage = () => {
  const context = useContext(UpcomingMoviesContext)
  const movies = context.movies.filter((m) => {
    return !("watch-later" in m);
  });

  return (
    <PageTemplate 
      title='No. Movies'
      movies={movies}
      action={(movie) => {
        return <WatchListButton movie={movie} />;
      }}
    />
  );
};

export default UpcomingPage;