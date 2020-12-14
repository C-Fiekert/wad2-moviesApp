import React from "react";
import { MemoryRouter } from "react-router";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import 'semantic-ui-css/semantic.min.css';
import ActorCard from "../src/components/actorCard";
import ActorDetails from "../src/components/actorDetails";
import ActorFilter from "../src/components/actorFilterControls";
import ActorList from "../src/components/actorList";
import ReviewButton from "../src/components/buttons/addReview.js";
import AddToFavoritesButton from "../src/components/buttons/addToFavorites.js";
import WatchListButton from "../src/components/buttons/addToWatchList.js";
import RemoveFavoriteMovieButton from "../src/components/buttons/removeFavoriteMovie.js";
import RemoveWatchListButton from "../src/components/buttons/removeWatchLater.js";
import Credits from "../src/components/credits";
import FavoriteWatchCard from "../src/components/favoriteWatchCard";
import FavoriteWatchList from "../src/components/favoriteWatchList";
import FilterControls from "../src/components/filterControls";
import ActorHeader from "../src/components/headerActor";
import ActorsHeader from "../src/components/headerActorList";
import MovieHeader from "../src/components/headerMovie";
import Header from "../src/components/headerMovieList";
import MovieCard from "../src/components/movieCard";
import MovieCredits from "../src/components/movieCredits"
import MovieDetails from "../src/components/movieDetails";
import MovieList from "../src/components/movieList";
import MovieReview from "../src/components/movieReview"
import MovieReviews from "../src/components/movieReviews"
import ReviewForm from "../src/components/reviewForm";
import SiteHeader from "../src/components/siteHeader";
import TopRatedCard from "../src/components/topRatedCard";
import TopRatedList from "../src/components/topRatedList";
import GenresContextProvider from "../src/contexts/genresContext";
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

const actor = {
  birthday: "1963-12-18",
  known_for_department: "Acting",
  deathday: null,
  id: 287,
  name: "Brad Pitt",
  also_known_as: [
    "برد پیت",
    "Бред Питт",
    "Бред Пітт",
    "Buratto Pitto",
    "Брэд Питт",
    "畢·彼特",
    "ブラッド・ピット",
    "브래드 피트",
    "براد بيت",
    "แบรด พิตต์"
  ],
  gender: 2,
  biography: "William Bradley \"Brad\" Pitt (born December 18, 1963) is an American actor and film producer. Pitt has received two Academy Award nominations and four Golden Globe Award nominations, winning one. He has been described as one of the world's most attractive men, a label for which he has received substantial media attention. Pitt began his acting career with television guest appearances, including a role on the CBS prime-time soap opera Dallas in 1987. He later gained recognition as the cowboy hitchhiker who seduces Geena Davis's character in the 1991 road movie Thelma & Louise. Pitt's first leading roles in big-budget productions came with A River Runs Through It (1992) and Interview with the Vampire (1994). He was cast opposite Anthony Hopkins in the 1994 drama Legends of the Fall, which earned him his first Golden Globe nomination. In 1995 he gave critically acclaimed performances in the crime thriller Seven and the science fiction film 12 Monkeys, the latter securing him a Golden Globe Award for Best Supporting Actor and an Academy Award nomination.\n\nFour years later, in 1999, Pitt starred in the cult hit Fight Club. He then starred in the major international hit as Rusty Ryan in Ocean's Eleven (2001) and its sequels, Ocean's Twelve (2004) and Ocean's Thirteen (2007). His greatest commercial successes have been Troy (2004) and Mr. & Mrs. Smith (2005).\n\nPitt received his second Academy Award nomination for his title role performance in the 2008 film The Curious Case of Benjamin Button. Following a high-profile relationship with actress Gwyneth Paltrow, Pitt was married to actress Jennifer Aniston for five years. Pitt lives with actress Angelina Jolie in a relationship that has generated wide publicity. He and Jolie have six children—Maddox, Pax, Zahara, Shiloh, Knox, and Vivienne.\n\nSince beginning his relationship with Jolie, he has become increasingly involved in social issues both in the United States and internationally. Pitt owns a production company named Plan B Entertainment, whose productions include the 2007 Academy Award winning Best Picture, The Departed.",
  popularity: 10.647,
  place_of_birth: "Shawnee, Oklahoma, USA",
  profile_path: "/kU3B75TyRiCgE270EyZnHjfivoq.jpg",
  adult: false,
  imdb_id: "nm0000093",
  homepage: null
};

storiesOf("Site Header", module).addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => (
  <SiteHeader />
));


storiesOf("Home Page/Header", module).add("default", () => (
  <Header title="No. Movies" numMovies={10} />
));

storiesOf("Home Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
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


storiesOf("Movie Details Page/MovieHeader", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => <MovieHeader movie={sample} />);


storiesOf("Movie Details Page/MovieDetails", module).add("default", () => (
  <MovieDetails movie={sample} />
));

storiesOf("Movie Details Page/MovieReviews", module).add("default", () => (
  <MovieReviews movie={sample} />
));

storiesOf("Movie Details Page/MovieCredits", module).addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => (
  <Credits movie={sample} />
));


storiesOf("Actor List Page/ActorListHeader", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => <ActorsHeader name="No. Actors" numActors={10} />);


storiesOf("Actor List Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <ActorFilter onUserInput={action("button-click")} numMovies={10} />
  ));


  storiesOf("Actor List Page/ActorList", module)
  .addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const persons = [actor, actor, actor, actor, actor];
    return (
      <ActorList
        persons={persons}
      />
    );
  });


  storiesOf("Actor List Page/ActorCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <ActorCard
      person={actor}
    />
  ))
  .add("exception", () => {
    const actorNoPoster = { ...actor, profile_path: undefined };
    return (
      <ActorCard
        person={actorNoPoster}
      />
    );
  });


storiesOf("Actor Details Page/ActorPageHeader", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => <ActorHeader person={actor} />);


storiesOf("Actor Details Page/ActorPageDetails", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => <ActorDetails person={actor} />);


storiesOf("Actor Details Page/MoviesFeaturedIn", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => <MovieCredits person={actor} />);


storiesOf("Top Rated Page/TopRatedHeader", module).add("default", () => (
  <Header title="No. Movies" numMovies={10} />
));


  storiesOf("Top Rated Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));


  storiesOf("Top Rated Page/TopRatedList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <TopRatedList
        movies={movies}
      />
    );
  });


  storiesOf("Top Rated Page/TopRatedCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <TopRatedCard
      movie={sample}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <TopRatedCard
        movie={sampleNoPoster}
      />
    );
  });


  storiesOf("Upcoming Page/UpcomingHeader", module).add("default", () => (
    <Header title="No. Movies" numMovies={10} />
  ));


  storiesOf("Upcoming Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));


  storiesOf("Upcoming Page/UpcomingList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <MovieList
        movies={movies}
        action={(movie) => {
          return <WatchListButton movie={movie} />
        }}
      />
    );
  });


  storiesOf("Upcoming Page/UpcomingCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={(movie) => {
        return <WatchListButton movie={movie} />
      }}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={(movie) => {
          return <WatchListButton movie={movie} />
        }}
      />
    );
  });


  storiesOf("Favorites Page/FavoritesHeader", module).add("default", () => (
    <Header title="Favorite Movies" numMovies={10} />
  ));


  storiesOf("Favorites Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));


  storiesOf("Favorites Page/FavoritesList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <FavoriteWatchList
        movies={movies}
        review={(movie) => {
          return <ReviewButton movie={movie} />
        }}
        remove={(movie) => {
          return <RemoveFavoriteMovieButton movie={movie} />
        }}
      />
    );
  });


  storiesOf("Favorites Page/FavoriteCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <FavoriteWatchCard
      movie={sample}
      review={(movie) => {
        return <ReviewButton movie={movie} />
      }}
      remove={(movie) => {
        return <RemoveFavoriteMovieButton movie={movie} />
      }}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <FavoriteWatchCard
        movie={sampleNoPoster}
        review={(movie) => {
          return <ReviewButton movie={movie} />
        }}
        remove={(movie) => {
          return <RemoveFavoriteMovieButton movie={movie} />
        }}
      />
    );
  });


  storiesOf("Watch Later Page/WatchLaterHeader", module).add("default", () => (
    <Header title="Watch Later" numMovies={10} />
  ));


  storiesOf("Watch Later Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));


  storiesOf("Watch Later Page/WatchLaterList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <FavoriteWatchList
        movies={movies}
        review={(movie) => {
          return <ReviewButton movie={movie} />
        }}
        remove={(movie) => {
          return <RemoveWatchListButton movie={movie} />
        }}
      />
    );
  });


  storiesOf("Watch Later Page/WatchLaterCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <FavoriteWatchCard
        movie={sample}
        review={(movie) => {
          return <ReviewButton movie={movie} />
        }}
        remove={(movie) => {
          return <RemoveWatchListButton movie={movie} />
        }}
      />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <FavoriteWatchCard
        movie={sampleNoPoster}
        review={(movie) => {
          return <ReviewButton movie={movie} />
        }}
        remove={(movie) => {
          return <RemoveWatchListButton movie={movie} />
        }}
      />
    );
  });


storiesOf("Review Form Page/ReviewFormHeader", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => <MovieHeader movie={sample} />);


storiesOf("Review Form Page/ReviewForm", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => <ReviewForm movie={sample} />);


storiesOf("Review Page/ReviewPageHeader", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => <MovieHeader movie={sample} />);


storiesOf("Review Page/Review", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => <MovieReview review={sample} />);