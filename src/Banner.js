import React, { useEffect, useState } from 'react'
import "./css/banner.css"
import axios from './localaxios';
import userrequests from './Request';

const Banner = () => {
  const [movie,setMovie] = useState([]);

  useEffect(() => {
     async function fetchData(){
       const request = await axios.get(userrequests.fetchActionMovies);
      
       setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
      
     }
     fetchData();
     console.log(movie);
  }, [])
  
  return (
    <div className='banner' style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,backgroundPosition:'center',backgroundSize:'cover' }}>
        <div className='banner__content'>
           <h1 className='banner__title'>
               {movie?.title || movie?.original_name || movie?.name }
           </h1>
           <div className='banner__buttons'>
             <button>Play</button>
             <button>My List</button>
           </div>
           <div className='banner__description'>
               <p>
                  {movie?.overview}
               </p>
           </div>
        </div>
        <div className='banner__fade'></div>
    </div>
  )
}

export default Banner