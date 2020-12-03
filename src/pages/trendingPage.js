import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {TrendingContext} from '../contexts/trendingContext'
import AddToFavoritesButton2 from '../components/buttons/addToFavorites2'

const TrendingPage = () => {
  const context = useContext(TrendingContext);
  const movies = context.movies.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton2 movie={movie} />
      }}
    />
  );
};

export default TrendingPage;