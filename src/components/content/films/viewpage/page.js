import react from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MovieViewPage } from '../../../../api/api';
import {PostDataFavourite} from  '../../../../api/api';
import './page.css';

const Page = () => {
    const [movie , setmovie] = useState([]);
    let { id } = useParams();

    useEffect(() => {   
        MovieViewPage(id)
        .then((reultIdData) => setmovie(reultIdData));
    }, [])
    
    function AddDataFavourite (){
        PostDataFavourite(movie)
        .then((resultPost) => console.log(resultPost))
        .catch((error) => console.log(error));
    }

    console.log(movie);
   
    return (
        <div className="main">
          
            <div>
                <img  src = {`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`}  className = "backdrop" width = "100%" height="500"/> 
                <div className="poster_box">
                    <img  src = {`http://image.tmdb.org/t/p/w500${movie.poster_path}`} className = "poster" height = "500" width="400"/>
                    <p>original lenguage : {movie.original_language}</p>
                    <p>popularity : {movie.popularity}</p>
                    <p>release date : {movie.release_date}</p>
                    <p>vote count : {movie.vote_count}</p>
                    <button type = "submit" className='FavouriteButton' onClick={AddDataFavourite}>Add Favourite</button>
                </div>
           </div>
           <div className="instruction">
                <h1>{movie.original_title}</h1>
                <p>{movie.overview}</p>
           </div>
        </div>
    );
}

export default Page;