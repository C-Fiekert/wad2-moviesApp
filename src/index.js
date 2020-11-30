import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage';
import FavoriteMoviesPage from './pages/favoritesMoviesPage';
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingPage from './pages/upcomingPage';
import MoviesContextProvider from "./contexts/moviesContext";
import UpcomingMoviesContext from "./contexts/upcomingMoviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader /> 
        <div className="container-fluid">
          <MoviesContextProvider>
            <UpcomingMoviesContext>
              <GenresContextProvider>    {/* NEW */}
              <Switch>
                <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                <Route exact path="/reviews/:id" component={MovieReviewPage} />
                <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                <Route exact path="/movies/upcoming" component={UpcomingPage} />
                <Route exact path="/movies/:id" component={MoviePage} />
                <Route exact path="/" component={HomePage} />
                <Redirect from="*" to="/" />
              </Switch>
              </GenresContextProvider>    {/* NEW */}
            </UpcomingMoviesContext>
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));