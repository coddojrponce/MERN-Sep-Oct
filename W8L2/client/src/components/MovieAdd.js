

import {useState,useEffect,useContext} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {UserContext} from '../context/UserContextProvider'
import io from 'socket.io-client'


const MovieAdd = () => {
  const {state} = useContext(UserContext)
  const [title,setTitle]=useState("")
  const [genre,setGenre]=useState("")
  const [art,setArt]=useState("")
  const [duration,setDuration]=useState("")
  const [actors,setActors]=useState("")
  const [rating,setRating]=useState("")
  const [friendly,setFriendly]=useState(false)
  const [release,setRelease]=useState("")
  const [errors,setErrors] = useState({})
  const [socket] = useState(()=>io(':8000',{
    withCredentials:true,
    extraHeaders:{
      "my-custom-header": "abcd"
    }
  }))
  
  const navigate = useNavigate()

  useEffect(()=>{
    console.log("on Movie Add")
    !state.user && navigate('/login')
    
  },[])

      const genres = [
        'Comedy',
        'Drama',
        'Horror',
        'Sci-Fi',
        'Fantasy',
        'Action',
        'Family',
        'Animated',
        'Documentary',
        'Romcom',
        'Silent Movie',
        'Thriller',
        'Crime Noir',
        'French Cinema'
    ]

    const ratings = ['G','PG','PG-13','R','NC-17']

    const handleTitle = (e)=>{
        setErrors("")
        setTitle(e.target.value)
        
        
    }
    const handleGenre = (e)=>{

        setErrors("")
        setGenre(e.target.value)
    }
    const handleArt = (e)=>{

        setErrors("")
        setArt (e.target.value)
    }
    const handleDuration = (e)=>{

        setErrors("")
        setDuration(e.target.value)
    }
    const handleRating= (e)=>{

        setErrors("")
        setRating(e.target.value)
    }
    const handleActors = (e)=>{
        
        setErrors("")
        setActors(e.target.value)
    }
    const handleFriendly = (e)=>{
        
        setErrors("")
        setFriendly(e.target.value)
    }
    const handleRelease = (e)=>{
        
        setErrors("")
        setRelease(parseInt(e.target.value) || "")
    }
    const handleSubmit= (e)=>{
        e.preventDefault()

        const movie = {
            title,
            genre,
            boxArt:art,
            duration,
            actors,
            rating,
            isKidFriendly:friendly,
            releaseYear:release
        }

        axios.post("http://localhost:8000/api/v1/movies",movie,{withCredentials:true})
        .then((movie)=>{
            console.log(movie)
            socket.emit('movie_added_from_client')
            navigate("/movies")
        })
        .catch((err)=>{
            console.log(err.response.data.error.errors)
            setErrors(err.response.data.error.errors)
        })
    }

  return (
    <div>
        <h3>Add Movie <button className = "btn hover" onClick={()=>navigate('/movies')}>All Movies</button></h3>
        <form onSubmit={handleSubmit}>
        <div>
            {errors.title ? <p>{errors.title.message}</p>:null}
            <label htmlFor="">Title</label>
            <input className="form-control" onChange={handleTitle} type="text" value={title}  />
        </div>
        <div>
            {errors.genre ? <p>{errors.genre.message}</p>:null}
            <label htmlFor="">Genre</label>
            <select className="form-control"  onChange = {handleGenre} name="" id="">
                <option value=""></option>
                {
                    genres.map((item,idx)=>(
                        <option key = {idx} value={item}>{item}</option>
                    ))
                }
            </select>
        </div>
        <div>
            {errors.boxArt ? <p>{errors.boxArt.message}</p>:null}
            <label htmlFor="">Box Art</label>
            <input className="form-control"  onChange={handleArt} type="text" value={art} />
        </div>
        <div>
            {errors.duration ? <p>{errors.duration.message}</p>:null}
            <label htmlFor="">Duration</label>
            <input className="form-control" onChange={handleDuration} type="text" value={duration} />
        </div>
        <div>
            {errors.rating ? <p>{errors.rating.message}</p>:null}
            <label htmlFor="">Rating</label>
            <select  className="form-control"  onChange={handleRating} name="" id="">
                <option value=""></option>
                {
                    ratings.map((item,idx)=>(
                        <option key = {idx} value={item}>{item}</option>
                    ))
                }
            </select>
        </div>
        <div>
            {errors.actors ? <p>{errors.actors.message}</p>:null}
            <label htmlFor="">Actors</label>
            <input className="form-control"  onChange={handleActors} type="text" value={actors}/>
        </div>
        <div>
            {errors.isKidFriendly ? <p>{errors.isKidFriendly.message}</p>:null}
            <label htmlFor="">Is Kid Friendly</label>
        </div>
        <div>
            <label htmlFor="">Yes</label>
            <input className="form-control-radio hover-success" onChange={handleFriendly} type="radio" value="true" name="isFriendly" />
            <label htmlFor="">No</label>
            <input defaultChecked className="form-control-radio hover-danger" onChange={handleFriendly} type="radio" value="false" name="isFriendly" />
        </div>
        <div>
            {errors.releaseYear ? <p>{errors.releaseYear.message}</p>:null}

            <label htmlFor="">Release Year</label>
            <input className="form-control"  onChange={handleRelease} type="text" value={release || ""} />
        </div>
        <div className="row">
            <button className = "btn hover hover-success" type="submit">Add Movie</button>
            <button onClick = {()=>navigate('/movies')} className = "btn hover hover-danger" >Cancel</button>
            
        </div>
        </form>
        
    </div>
  )
}

export default MovieAdd

