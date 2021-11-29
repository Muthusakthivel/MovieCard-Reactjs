import React, { Component } from 'react';
import './App.css';

import MovieCard from "./MovieCard";



var movieArray = []
var omdb = 'http://www.omdbapi.com/?t='
var key =  '&apikey=de322a1c'
//peliculas means movies, in Spanish
var peliculas = [
  'march+of+the+penguins',
  'the+martian',
  'a+league+of+their+own',
  'indiana+jones',
  'hidden+figures',
  'tremors',
  'moana',
  'maidentrip',
  'jurassic+park',
  'zootopia'
]


function newMovie(){
  for(var i=0; i<peliculas.length; i++){
    var film = peliculas[i];
    
    movieArray.push(omdb + film + key);
}};


newMovie()

class App extends Component {

constructor(){
    super();
    this.state = {
      
      movieInfo: [],
    };
  }



componentDidMount() {
  
  for (var i = 0; i<=movieArray.length; i++){
    fetch(movieArray[i])
    
    .then(response=>response.json())
    .then(response =>{
       
       let movieCopy = this.state.movieInfo.slice();
       movieCopy.push(response)
       this.setState({movieInfo: movieCopy});
       
    })  
  .catch(error => console.log('parsing failed', error)) 
  }
}



  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">MOVIE CARDS</h1>
        </header>
        {this.state.movieInfo.map((movie, index) => (
            <div>
              <MovieCard movie = {movie} key = {index}/>
            </div>
        )
        )}
      </div>
    );
  }
}

export default App;