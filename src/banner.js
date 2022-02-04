import React, { useState, useEffect } from "react" ;

import axios from "./axios"
import requests from "./requests"

function Banner(){
    const [movie,setMovie]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(request.fetchNetflixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random()*request.data.result.length-1)
            ])
            return request;
        }
        fetchData();

    },[])
    console.log(movie);
    return (
        <div>

        </div>
    )
}
export default Banner;