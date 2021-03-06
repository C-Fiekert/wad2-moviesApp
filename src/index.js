import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage';
import FavoriteMoviesPage from './pages/favoritesMoviesPage';
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingPage from './pages/upcomingPage';

const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader />
          <div className="container-fluid">
            <Switch>
            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <Route exact path="/movies/upcoming" component={UpcomingPage} />
            <Route path="/movies/:id" component={MoviePage} />
            <Route path="/" component={HomePage} />
            <Route path="/reviews/:id" component={MovieReviewPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById("root"));