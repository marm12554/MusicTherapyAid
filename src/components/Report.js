import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { getAuth } from './token';

export default class Report extends React.Component {
  constructor(props) {
    var t = getAuth()
    super(props);
    this.state = {
      token: t,
      seed_artists: '',
      seed_genres: '',
      seed_tracks: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    if(event.target.name === "artists")
      this.setState({ seed_artists: event.target.value });
    if(event.target.name === "genres")
      this.setState({ seed_genres: event.target.value });
    if(event.target.name === "tracks")
      this.setState({ seed_tracks: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.token)
    
    axios({
      url: 'https://api.spotify.com/v1/recommendations',
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${this.state.token}`,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      params: {
        "seed_artists": this.state.seed_artists,
        "seed_genres": this.state.seed_genres,
        "seed_tracks": this.state.seed_tracks
      }
    }).then(function(response) {
        console.log(response);
    }).catch(function(error) {
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Artists:
            <input type="text" name="artists" onChange={this.handleChange} />
          </label>
          <label>
            Genres:
            <input type="text" name="genres" onChange={this.handleChange} />
          </label>
          <label>
            Tracks:
            <input type="text" name="tracks" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}