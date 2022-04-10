import axios from './localaxios';
import React, { useEffect, useState } from 'react';
import "./css/row.css";

const Row = ({title,isLargeRow,fetchURL}) => {

  const [movies,setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";  
  
  console.log(fetchURL);
  useEffect(() => {
    async function fetchData() {
        const request = await axios.get(fetchURL);
        //console.log(request.data.results);
        setMovies(request.data.results);
        
        
    }
fetchData();
console.log(movies);
    
    
  }, [fetchURL])
  
  return (
    <div className='row'>
       <h2>{title}</h2>

       <div className='row__posters'>
           {
               movies.map(movie=>{
        
                   return ( <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
                   key={movie.id} className={`rowposter ${isLargeRow && "largeImage"}`} /> )
               })
        }

       
            
       </div>
    </div>
  )
}

export default Row;