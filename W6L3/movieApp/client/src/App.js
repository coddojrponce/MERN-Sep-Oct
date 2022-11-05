import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import MovieList from './components/MovieList'
import MovieAdd from './components/MovieAdd'
import ViewOneMovie from './components/ViewOneMovie'
import MovieEdit from './components/MovieEdit'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element = {<Navigate to="/movies" />} path="/" />

        {/* Create */}
        <Route element = {<MovieAdd/>} path="/movies/add" />
        {/* Read */}
        <Route element = {<MovieList/>} path="/movies" />
        <Route element = {<ViewOneMovie/>} path="/movies/:id" />

        {/* update */}
        <Route element = {<MovieEdit/>}  path="/movies/:id/edit" />
        {/* delete with  axios */}
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
