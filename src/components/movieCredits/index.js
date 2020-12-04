import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import "./movieCredits.css";
import { getMovieCredits } from "../../api/tmdb-api";
import { Card } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

export default ({ person }) => {
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(person.id).then(movieCredits => {
      setMovieCredits(movieCredits);
    });
  }, []);

  return(
      <div className="row movies bg-info" style={{backgroundColor:"#d20000"}}>
        {movieCredits.map(mc => {
  return (
    <div className="col-sm-3" style={{backgroundColor:"#d20000"}}>
    <Card>
    <center>
      <Image
        className="card-img-tag center "
        alt={"Photo Unavailable"}
        src={
          mc.poster_path
            ? `https://image.tmdb.org/t/p/w500/${mc.poster_path}`
            : "./film-poster-placeholder.png"
        }
        rounded
      />
      <Card.Content>
        <Card.Header>{mc.title}</Card.Header>
        <Card.Description>
          <Icon name='star outline'/>
          Rating: {mc.vote_average}
        </Card.Description>
        <Card.Description>
          <Icon name='calendar alternate' />
          Released: {mc.release_date}
        </Card.Description>
        <Card.Content extra>
          <Link to={`/movies/${mc.id}`}>
          <Button class="ui button" animated='vertical' color="red" fluid>
            <Button.Content hidden><Icon name='angle double right' /></Button.Content>
            <Button.Content visible>
              View Movie
            </Button.Content>
          </Button>
          <br></br>
          </Link>
        </Card.Content>
      </Card.Content>
      </center>
    </Card>
    </div>
  );})}
  </div>
  )
  }