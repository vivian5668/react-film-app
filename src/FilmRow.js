import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {



  render() {

    const { title, date, key, url } = this.props

    const posterUrl = "https://image.imdb.org/t/p/w780/" + url
    const year = new Date(date).getFullYear()

//row 19 onDetailsClick goes back to FIlmList, not App, b/c filmList has passed in (film) info throught he mapping

    return (
      <div className="film-row" onClick={this.props.onDetailsClick}>
        <FilmPoster title={title} url={url} />
        <div className="film-summary">
          <h1>{title}</h1>
          <p>{year}</p>
        </div>
        <Fave 
          isFave={this.props.isFave} 
          onFaveToggle={this.props.onFaveToggle} />
      </div>
    )
  }
}

export default FilmRow;
