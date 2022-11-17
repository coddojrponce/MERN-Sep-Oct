import {useState,useEffect,useContext} from 'react'
import './App.css';
import {BrowserRouter, Routes, Route, Navigate,useNavigate} from "react-router-dom"
import MovieList from './components/MovieList'
import MovieAdd from './components/MovieAdd'
import ViewOneMovie from './components/ViewOneMovie'
import MovieEdit from './components/MovieEdit'
import Register from './components/Register'
import Login from './components/Login'
import axios from 'axios'
import {UserContext,UserContextProvider} from './context/UserContextProvider'

function App() {

  const [loggedIn,setLoggedIn] = useState(false)
  const {state,dispatch} = useContext(UserContext)

  useEffect(()=>{
    axios.post('http://localhost:8000/api/v1/isLoggedIn',{},{withCredentials:true})
    .then((user)=>{
      console.log(user.data)
      dispatch({
        type:"SET_USER",
        payload:user.data
      })
      // setUser(user.data) this is what we did before
      setLoggedIn(true)
    })
    .catch((err)=>{
      console.log(err.response.data)
      // setUser(null)
      dispatch({
        type:"NULL_USER",
      })
    })

  },[])

  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route element = {<Register setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>} path="/register" />
        <Route element = {<Login setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>} path="/login" />

        <Route element = {<Navigate to="/movies" />} path="/" />

        {/* Create */}
        <Route element = {<MovieAdd />} path="/movies/add" />
        {/* Read */}
        <Route element = {<MovieList />} path="/movies" />
        <Route element = {<ViewOneMovie />} path="/movies/:id" />

        {/* update */}
        <Route element = {<MovieEdit/>}  path="/movies/:id/edit" />
        {/* delete with  axios */}
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
