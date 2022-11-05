import {useEffect,useState} from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'

const ViewOneMovie = () => {

  const navigate = useNavigate()
  const [movie,setMovie] = useState({})
  const [state,setState] = useState("")
  const {id} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/v1/movies/${id}`)
    .then((res)=>{
      console.log(res)
      setMovie(res.data.movie)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  const handleDelete=()=>{
    axios.delete(`http://localhost:8000/api/v1/movies/${id}`)
    .then((res)=>{
      console.log(res)
      navigate('/movies')
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  return (
    <div>

      <h3>Movie View <Link to="/movies"><button className="btn hover">All Movies</button></Link></h3>

      <div className="container">
        <div className="card-view">
          <div className="close-cont">
                <button onClick={()=>{navigate('/movies')}} className="close-btn hover hover-danger" >X</button>
          </div>
          <h4>{movie.title? movie.title:"...loading"} </h4>
          <img style={{borderRadius:'5px',border:'2px solid grey'}} src={movie.boxArt} alt="Movie Image" />
          <h4>Genre: {movie.genre}</h4>
          <h4>Duration:{movie.duration}</h4>
          <h4>Rating: {movie.rating}</h4>
          <h4>Actors: {movie.actors}</h4>
          <h4>Is Kid Friendly: {movie.isKidFriendly?"Yes":"No"}</h4>
          <h4>Release Year: {movie.releaseYear}</h4>
          <div style={{display:'flex',justifyContent:'center'}}>
                <button onClick={handleDelete} className="btn hover hover-danger" >Delete</button>
                <Link to={`/movies/${movie._id}/edit`}><button  className="btn hover hover-success" >Edit</button></Link>

          </div>
      </div>
      </div>
      
    </div>
  )
}

export default ViewOneMovie








{/* <div>
        <h3>Movie View<button className = "btn hover" onClick={()=>navigate('/movies')}>All Movies</button></h3>
        
        <div className="container">

          <div className="card-view">
            <div className="close-cont">
              <button onClick={()=>{navigate('/movies')}} className="close-btn hover hover-danger" >X</button>
            </div>
            
            <h4>{movie.title}</h4>
            <img style={{borderRadius:'5px'}} src={movie.boxArt} alt="movie image" />
            <h4>Duration: {movie.duration}</h4>
            <h4>Rating: {movie.rating}</h4>
            <h4>Actors: {movie.actors}</h4>
            <h4>Is Kid Friendly: {movie.isKidFriendly?"Yes":"No"}</h4>
            <h4>Released: {movie.releaseYear}</h4>
            <div style={{display:'flex',justifyContent:'center'}}>
              <button onClick={handleDelete} className="btn hover hover-danger" >Delete</button>
              <Link to={`/movies/${movie._id}/edit`}><button  className="btn hover hover-success" >Edit</button></Link>

            </div>

            

            
          </div>
          
        </div>

          
        
    </div> */}