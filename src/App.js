import React, { Component } from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';
import './App.css';

const films = TMDB.films

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      films,  //this is actually films:films, shortened
      faves: [],
      current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
  }

  handleFaveToggle(film) {
    //this 'slice' is making a copy of this array
    const faves = this.state.faves.slice()
    const filmIndex = faves.indexOf(film)
    //if the item is found (if index is NOT -1), then, add to array of faves
    if (filmIndex !== -1) {
      //if the film is ALREADY a fave
      faves.splice(filmIndex, 1)
      console.log("removing a favorite from fave array", film.title)
    } else {
      //the film needs to be added to faves
      faves.push(film)
      console.log("adding a favorite to fave array", film.title)
    }
    this.setState({faves}) //this is actually faves:faves
  }

  handleDetailsClick = (film) => {
    console.log("Fetching details for" + film.title)
    this.setState({
      current: film
    })
  }

  render() {
    return (
      <div className="film-library">
        <FilmListing faves={this.state.faves} onDetailsClick={this.handleDetailsClick} onFaveToggle={this.handleFaveToggle} films={this.state.films} />
        <FilmDetails film={this.state.current} />
      </div>
    );
  }
}

export default App;
