
import {useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'

const MovieEdit = (props) => {

  const {id} = useParams()

  const [title,setTitle]=useState("")
  const [genre,setGenre]=useState("")
  const [art,setArt]=useState("")
  const [duration,setDuration]=useState("")
  const [actors,setActors]=useState("")
  const [rating,setRating]=useState("")
  const [friendly,setFriendly]=useState("")
  const [release,setRelease]=useState("")
  const [errors,setErrors] = useState({})
  


  const navigate = useNavigate()

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

    useEffect(()=>{
      axios.get(`http://localhost:8000/api/v1/movies/${id}`)
      .then((res)=>{
        console.log(res.data.movie)
        setTitle(res.data.movie.title)
        setGenre(res.data.movie.genre)
        setArt(res.data.movie.boxArt)
        setDuration(res.data.movie.duration)
        setActors(res.data.movie.actors)
        setRating(res.data.movie.rating)
        setFriendly(res.data.movie.isKidFriendly)
        setRelease(res.data.movie.releaseYear)
      })
      .catch((err)=>{
        console.log(err)
      })
    },[])

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

        axios.put(`http://localhost:8000/api/v1/movies/${id}`,movie)
        .then((movie)=>{
            console.log(movie)
            navigate("/movies")
        })
        .catch((err)=>{
            console.log(err.response.data.error.errors)
            setErrors(err.response.data.error.errors)
        })
    }

  return (
    <div>
        <h3>Edit Movie <button className = "btn hover" onClick={()=>navigate('/movies')}>All Movies</button></h3>
        <form onSubmit={handleSubmit}>
        <div>
            {errors.title ? <p>{errors.title.message}</p>:null}
            <label htmlFor="">Title</label>
            <input className="form-control" onChange={handleTitle} type="text" value={title}  />
        </div>
        <div>
            {errors.genre ? <p>{errors.genre.message}</p>:null}
            <label htmlFor="">Genre</label>
            <select className="form-control"  onChange = {handleGenre} name="" id="" value={genre}>
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
            <select  className="form-control"  onChange={handleRating} name="" id="" value={rating}>
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
            <input checked={friendly?"yes":null} className="form-control-radio hover-success" onChange={handleFriendly} type="radio"  name="isFriendly" />
            <label htmlFor="">No</label>
            <input checked ={!friendly?"yes":null} className="form-control-radio hover-danger" onChange={handleFriendly} type="radio"  name="isFriendly" />
        </div>
        <div>
            {errors.releaseYear ? <p>{errors.releaseYear.message}</p>:null}

            <label htmlFor="">Release Year</label>
            <input className="form-control"  onChange={handleRelease} type="text" value={release || ""} />
        </div>
        <div className="row">
            <button className = "btn hover hover-success" type="submit">Edit Movie</button>
            <button onClick = {()=>navigate('/movies')} className = "btn hover hover-danger" >Cancel</button>
            
        </div>
        </form>
        
    </div>
  )
}

export default MovieEdit