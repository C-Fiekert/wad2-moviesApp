import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {TrendingContext} from '../contexts/trendingContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

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
        return <AddToFavoritesButton movie={movie} />
      }}
    />
  );
};

export default TrendingPage;