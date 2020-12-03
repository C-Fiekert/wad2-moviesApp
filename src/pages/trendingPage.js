import React, { useContext } from "react";
import PageTemplate from '../components/templateTrendingListPage'
import {TrendingContext} from '../contexts/trendingContext'

const TrendingPage = () => {
  const context = useContext(TrendingContext);
  const movies = context.movies.filter((m) => { return !("favorite" in m); });

  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
    />
  );
};

export default TrendingPage;