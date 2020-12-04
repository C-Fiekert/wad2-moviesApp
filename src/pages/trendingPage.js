import React, { useContext } from "react";
import PageTemplate from '../components/templateTrendingListPage'
import {MoviesContext} from '../contexts/moviesContext'

const TrendingPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => { return !("favorite" in m); });

  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
    />
  );
};

export default TrendingPage;