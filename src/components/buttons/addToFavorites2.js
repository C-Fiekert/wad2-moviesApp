import React, { useContext } from "react";
import {TrendingContext} from "../../contexts/trendingContext";

import { Button } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

const AddToFavoritesButton2 = ({ movie }) => {
  const context = useContext(TrendingContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(movie.id);
  };
  return (
    <Button class="ui button" animated='vertical' color="red" fluid onClick={handleAddToFavorite}>
      <Button.Content hidden><Icon name='angle double right' /></Button.Content>
      <Button.Content visible>
        Add to Favorites
      </Button.Content>
    </Button>
  );
};

export default AddToFavoritesButton2;