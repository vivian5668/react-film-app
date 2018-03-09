import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filter: 'all'
    }
  }

  handleFilterClick = (filter) => {
     this.setState ({
       filter: filter
     })
    console.log("setting filterto: " + filter)
  }

  render() {

    const { faves, films } = this.props

    var  allFilter  = (this.state.filter === 'all' ? 'is active' : '')
    var  favesFilter = (this.state.filter === 'faves' ? 'is active' : '')


    let allFilms = []
    //if filter is all, show all; if filter is set to Fav, only show fav

    if (this.state.filter === 'all') {
          allFilms = films.map((film,index) => {
              return(
                <FilmRow
                  onFaveToggle={() => this.props.onFaveToggle(film)}
                  title={film.title}
                  date={film.release_date}
                  key={film.id} url={film.poster_path}
                  isFave={faves.includes(film)}
                  onDetailsClick={() => this.props.onDetailsClick(film)}
                />
                )
            })
    } else {
          allFilms = faves.map((film,index) => {
              return(
                    <FilmRow
                      onFaveToggle={() => this.props.onFaveToggle(film)}
                      title={film.title}
                      date={film.release_date}
                      key={film.id} url={film.poster_path}
                      isFave={faves.includes(film)}
                      onDetailsClick={() => this.props.onDetailsClick(film)}
                    />
                    )
                })
    }
    

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">

            <div className={"film-list-filter " + allFilter} onClick={() => this.handleFilterClick('all')}>
                <span>ALL</span>
                <span className="section-count">{this.props.films.length}</span>
            </div>

            <div className={"film-list-filter " + favesFilter} onClick={() => this.handleFilterClick('faves')}>
                <span>FAVES</span>
                <span className="section-count">{faves.length}</span>
            </div>

        </div>
        {allFilms}
      </div>
    );
  }
}

export default FilmListing;
