
import {useState,useEffect,useContext} from 'react'
import axios from 'axios'
import {useNavigate,Navigate} from 'react-router-dom'
import {UserContext} from '../context/UserContextProvider'
import io from 'socket.io-client'

const MovieList = () => {

  const {state,dispatch} = useContext(UserContext);
  const [movies,setMovies] = useState([])
  const navigate = useNavigate()
  const [socket] = useState(()=>io(':8000',{
    withCredentials:true,
    extraHeaders:{
      "my-custom-header": "abcd"
    }
  }))

  useEffect(()=>{

  
      !state.user && navigate('/login')
    

      

      socket.emit('event_from_client')

      socket.on('answer_from_server',(answer)=>{setMovies(answer)})

      socket.on('refresh_movies',()=>{
        console.log("refresh message getting here")
        socket.emit('event_from_client')
        
      })
      // axios.get('http://localhost:8000/api/v1/movies',{withCredentials:true})
      // .then((res)=>{
      //   setMovies(res.data.movies)
      // })
      // .catch((err)=>{
      //   console.log(err)
      // })


      return () => socket.disconnect(true)
  },[])




  const handleLogout = ()=>{
    console.log("logged out")
    dispatch({
      type:"LOGOUT_USER",
      payload:navigate
    })
    
  }


  return (
    <div>
        <h3>Movie List
          <button className = "btn hover" onClick={()=>navigate('/movies/add')}>Create Movie</button>
          <button className = "btn hover" onClick={handleLogout}>Logout</button>
        </h3>
        
        <div className="container">
          {
              movies.map((item,idx)=>(
                <div onClick={()=>navigate(`/movies/${item._id}`)} style={{backgroundImage:`url(${item.boxArt})`,backgroundSize:"cover"}} className="card hover" key={idx}>
                  <h4 className="movie-title">{item.title}</h4>
                  </div>
              ))
          }
        </div>

          
        
    </div>
  )
}

export default MovieList