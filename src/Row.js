import React, { useState, useEffect } from "react" ;
import axios from './axios';
import "./row.css";
// import YouTube from "react-youtube"
const base_url="https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow}){
    const [movies, setMovies]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;

        }
        fetchData();

    },[fetchUrl]);
    console.table(movies);

    // const opts={
    //     width:"100%",
    //     height:"390",
    //     playerVars:{

    //         autoplay:1,
    //     },

    // };
    return (
       <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">
        {movies.map(movie => (
            <img 
            key={movie.id}
            // onclick={()=> handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow? movie.poster_path: movie.backdrop_path}`}alt={movie.name} />
        ))}

        </div>
       
           {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
        </div>
    )
}
export default Row;