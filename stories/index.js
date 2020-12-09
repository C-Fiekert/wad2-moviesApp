import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import ActorCard from "../src/components/actorCard";
import ActorDetails from "../src/components/actorDetails";
import ActorFilter from "../src/components/actorFilterControls";
import ActorList from "../src/components/actorList";
import ReviewButton from "../src/components/buttons/addReview.js";
import AddToFavoritesButton from "../src/components/buttons/addToFavorites.js";
import WatchListButton from "../src/components/buttons/addToWatchList.js";
import FilterControls from "../src/components/filterControls";
import ActorHeader from "../src/components/headerActor";
import ActorsHeader from "../src/components/headerActorList";
import MovieHeader from "../src/components/headerMovie";
import Header from "../src/components/headerMovieList";
import MovieCard from "../src/components/movieCard";
import MovieDetails from "../src/components/movieDetails";
import MovieList from "../src/components/movieList";
import ReviewForm from "../src/components/reviewForm";
import Siteheader from "../src/components/siteHeader";
import TopRatedCard from "../src/components/topRatedCard";
import TopRatedList from "../src/components/topRatedList";

import { MemoryRouter } from "react-router";
import GenresContextProvider from "../src/contexts/genresContext";
import MoviesContextProvider from "../src/contexts/moviesContext";
import ActorsContextProvider from "../src/contexts/actorsContext";
import { action } from "@storybook/addon-actions";

const sample = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 28,
      name: "Action"
    }
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US"
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America"
    }
  ],
  release_date: "2017-12-13",
  revenue: 1332459537,
  runtime: 152,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692
};


storiesOf("Home Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));


  storiesOf("Home Page/Header", module).add("default", () => (
    <MoviesHeader title="All Movies" numMovies={10} />
  ));


  storiesOf("Home Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <MovieList
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} />
        }}
      />
    );
  });


storiesOf("Home Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />
      }}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} />
        }}
      />
    );
  });





storiesOf("Movie Details Page/MovieDetails", module).add("default", () => (
  <MovieDetails movie={sample} />
));



storiesOf("Movie Details Page/MovieHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <MovieHeader movie={sample} />);