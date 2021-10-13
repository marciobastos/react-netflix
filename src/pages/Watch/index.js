import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router';
import ReactPlayer from 'react-player/youtube';
import Tmdb from '../../Tmdb';

const Page = () => {

   let { id } = useParams();
    const [movieVideo, setMovieVideo] = useState([]);
    const [statusCode, setStatusCode] = useState(0);
   
   useEffect(() => {

       const getMovie = async () => {
       let { results } = await Tmdb.getMovieVideo(id);  
       //alert(video);
       console.log(results);
       if(results !== undefined){
            setMovieVideo(results)
       }
       //setStatusCode(statusCode);
       //alert(video);
       } 
       
       getMovie();
       
   }, []);
    //console.log(movieVideo.results);
    return (
        <div>
            {  movieVideo.length > 0 && 
                movieVideo.slice(0, 1).map((i,k) => (
                    <ReactPlayer 
                        url={`https://www.youtube.com/watch?v=${i.key}`} 
                        controls
                        width='100vw'
                        height='100vh'
                        /> 
                        
                ))
            }
            { movieVideo.length <= 0 && 
                    <ReactPlayer 
                        url={`https://www.youtube.com/watch?v=CaZXdZGZfb0`} 
                        controls
                        width='100vw'
                        height='100vh'
                    /> 
            
            }

        </div>
    )
    
}
export default Page;