import React, { useEffect, createContext, useReducer } from "react";
import { getTrendingMovies } from "../api/tmdb-api";

export const TrendingContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.movies };
      case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
      };
      break;
    default:
      return state;
  }
};

const TrendingContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [] });

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  }; 
  useEffect(() => {
    getTrendingMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TrendingContext.Provider
      value={{
        movies: state.movies,
        addReview: addReview,
      }}
    >
      {props.children}
    </TrendingContext.Provider>
  );
};

export default TrendingContextProvider;