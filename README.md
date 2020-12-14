# Assignment 1 - ReactJS app

Name: Callum Fiekert

## Features

 + Feature 1 - Top Rated page. This displays the current top rated movies on TMDB 
 + Feature 2 - Actors page. This displays the current most popular actors on TMDB
 + Feature 3 - Actor Details page. This displays information about the chosen actor as well as movies they've starred in
 + Feature 4 - Upcoming page. This displays upcoming movies on TMDB
 + Feature 5 - Watch Later page. This stores movies which the user has chosen to watch later
 + Feature 6 - Semantic UI React styling. Movie app now feels vibrant with the addition of button animations
 + Feature 7 - Movie Cast. Each movie now displays its full cast as well as the characters they played
 + Feature 8 - Remove function. User can remove a movie from their favorites or watch later

## Setup requirements

1. Download this repository and unzip the project
2. In the project folder, create a file called ".env" and paste your API key inside
3. In your code editors console, run "npm install" to install project dependancies
4. Run "npm start" to start the movie app

## API Data Model

+ https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US - Get the cast for a movie 
+ https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US - Get movies starred in for an actor
+ https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1 - Get upcoming movies
+ https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1 - Get top rated movies
+ https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1 - Get the current most popular actors
+ https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY} - Get an actors details

## App Design

### Component catalogue

#### Movie Credits

![][moviecredits]

#### Actor Details

![][actordetails]

#### Actors Movies

![][actormovies]

#### Remove Favorite Movie

![][removefav]

#### Remove Movie from Watch Later

![][removewatch]

### UI Design

![][homepage]
>Shows homepage with new styling and color scheme. Add to Favorites buttons are animated

![][moviedetails]
>A more aesthetic table is used to show more information about each movie

![][moviecast]
>Each movie displays its full cast. Each actor can be visited

![][actors]
>The actors page shows the current most popular actors along with some brief information. Each actor can be visited

![][actorpage]
>The actor details page shows more information about each actor

![][featuredmovies]
>This shows the movies which a certain actor has starred in

![][toprated]
>This page displays the top rated movies on TMDB

![][removefavorite]
>Movies in the favorites page can be removed and returned to their original page

![][removewatchlater]
>Movies in the watch later page can also be removed and returned to their original page

## Routing

+ /movies/top-rated (public) - This page displays top rated movies
+ /actors (public) - This page displays the current most popular actors
+ /actors/:id (public) - This page displays a specific actors information

### Data hyperlinking

![][navbar]
> Each tab in the navigation bar brings the user to the respective pages

![][moviecard]
>Each movie card on the homepage can be viewed by clicking on the card. A movie can be added to the favorites page by clicking the "Add to Favorites" button

![][reviewextract]
>Review extracts for each movie can be viewed by clicking the button shown on the movie details page. Clicking the button again will hide the review extracts

![][movieactor]
>Each actor card on a movie details page has a "View Actor" button which brings you to the actors detail page.

![][removefromlist]
>The Additional button on a card in the favorites or watch later list can remove the movie from the list

## Independent learning

Semantic UI React was used in this project to style each web page and component to revamp the aesthetics of this web app. I learned about this information on the official Semantic website at (https://react.semantic-ui.com/)
I also learned about Firebase authentication which is used for managing login credentials for websites. I didn't manage to implement this feature but did however install the firebase dependancies and added my relevant authentication keys located in my .env file

---------------------------------

[model]: ./data.jpg
[moviecredits]: ./public/moviecredits.png
[actordetails]: ./public/actordetails.png
[actormovies]: ./public/actormovies.png
[removefav]: ./public/removefav.png
[removewatch]: ./public/removewatch.png
[homepage]: ./public/homepage.png
[moviedetails]: ./public/moviedetails.png
[moviecast]: ./public/moviecast.png
[actors]: ./public/actors.png
[actorpage]: ./public/actorpage.png
[featuredmovies]: ./public/featuredmovies.png
[toprated]: ./public/toprated.png
[removefavorite]: ./public/removefavorite.png
[removewatchlater]: ./public/removewatchlater.png
[navbar]: ./public/navbar.png
[moviecard]: ./public/moviecard.png
[reviewextract]: ./public/reviewextract.png
[movieactor]: ./public/movieactor.png
[removefromlist]: ./public/removefromlist.png
