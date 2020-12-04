import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getTrendingMovies } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        trending: [...state.trending],
      };
    case "watch-list":
      return {
          upcoming: state.upcoming.map((u) =>
            u.id === action.payload.movie.id ? { ...u, watchL: true } : u
        ),
        movies: [...state.movies],
        trending: [...state.trending],
        
      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], trending: [...state.trending] };
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], trending: [...state.trending] };
    case "load-trending":
      return { trending: action.payload.trending, movies: [...state.movies], upcoming: [...state.upcoming] };    
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
        trending: [...state.trending],
      };
    default:
      return state;
      }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], trending: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((u) => u.id).indexOf(movieId);
    dispatch({ type: "watch-list", payload: { movie: state.upcoming[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  }; 

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTrendingMovies().then((trending) => {
      dispatch({ type: "load-trending", payload: { trending } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        trending: state.trending,
        addToWatchList: addToWatchList,
        addToFavorites: addToFavorites,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};
export default MoviesContextProvider;