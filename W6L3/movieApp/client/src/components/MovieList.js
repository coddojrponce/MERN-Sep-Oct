
import {useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const MovieList = () => {

  const [movies,setMovies] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
      axios.get('http://localhost:8000/api/v1/movies')
      .then((res)=>{
        setMovies(res.data.movies)
      })
      .catch((err)=>{
        console.log(err)
      })
  },[])

  return (
    <div>
        <h3>Movie List<button className = "btn hover" onClick={()=>navigate('/movies/add')}>Create Movie</button></h3>
        
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