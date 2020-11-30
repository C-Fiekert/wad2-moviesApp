import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import {UpcomingMoviesContext} from '../contexts/upcomingMoviesContext'
import AddReviewButton from '../components/buttons/addReview'

const WatchLaterPage = props => {
  const context = useContext(UpcomingMoviesContext);
  const watchLater = context.movies.filter( m => m.watchL )
  return (
    <MovieListPageTemplate
      movies={watchLater}
      title={"Watch Later"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default WatchLaterPage;