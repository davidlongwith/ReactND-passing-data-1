import React, { Component } from 'react';

class FavoriteMovies extends Component {
  render() {
    console.log('Props', this.props)
    return (
      <ul>
        {this.props.profiles.map(profile => (
          <li key={profile.id}>{profile.favoriteMovieId}</li>
         ))
        }
      </ul>
    )
  }
}

export default FavoriteMovies