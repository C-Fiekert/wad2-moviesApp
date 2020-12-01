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
import UpcomingMoviesContextProvider from "./contexts/upcomingMoviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import WatchLaterPage from './pages/watchLaterPage';
import TrendingContextProvider from './contexts/trendingContext';
import TrendingPage from './pages/trendingPage';


const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron" style={{backgroundColor:"#d20000"}}>
        <SiteHeader /> 
        <div className="container-fluid" >
          <MoviesContextProvider>
            <TrendingContextProvider>
              <UpcomingMoviesContextProvider>
                <GenresContextProvider>    {/* NEW */}
                <Switch>
                  <Route exact path="/movies/watchLater" component={WatchLaterPage} />
                  <Route exact path="/movies/trending" component={TrendingPage} />
                  <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                  <Route exact path="/reviews/:id" component={MovieReviewPage} />
                  <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                  <Route exact path="/movies/upcoming" component={UpcomingPage} />
                  <Route exact path="/movies/:id" component={MoviePage} />
                  <Route exact path="/" component={HomePage} />
                  <Redirect from="*" to="/" />
                </Switch>
                </GenresContextProvider>    {/* NEW */}
              </UpcomingMoviesContextProvider>
            </TrendingContextProvider>
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));