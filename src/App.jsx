import { useState } from 'react'
import './App.css'
import SearchDiv from './Components/SearchDiv.jsx'
import MovieList from './Components/MoviesList.jsx';
import SearchByTitle from './Components/SearchByTitle.jsx';
import MovieDetails from './Components/MovieDetails.jsx';
function App() {
  const [movies, setMovies] = useState({});
  const [title, setTitle] = useState(false);
  const setMovieData = (data) => {
    setMovies(data);
  }
  const setboolean = (data) => {
    setTitle(data);
  }
  return (
    <div class="h-full w-full">
      <h1 class="text-white text-5xl font-medium text-center self-center">Movie Finder</h1>

      <div class="items-center flex space-x-0 place-content-between">
        <SearchDiv moviesData={setMovieData} setBool={setboolean}></SearchDiv>
        <SearchByTitle moviesData={setMovieData} setBool={setboolean}></SearchByTitle>
      </div>
      <div>
        {title ? (<MovieList datas={movies}></MovieList>) : (<MovieDetails datas={movies}></MovieDetails>)}
      </div>
    </div>
  )
}

export default App
