import react, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../films/films.css";
import { useNavigate, Link } from "react-router-dom";

const Favourite = () => {
    const [favourite , setFavourite] = useState([]);
    const navigate = useNavigate();
    console.log(favourite);
    const favData = [];
    console.log(favData);
    useEffect(() => {
        axios.get(`http://localhost:5000/posts`).then((res) => setFavourite([res]))
    
    }, [])
    favourite.map((resultFavouite) => {
        resultFavouite.data.forEach(res => {
            favData.push(res);
        });
     })
    
    return(
       <div>
            {
            favData.map((resData) => {
               return(
                <Link to="/films/viewpage">
                    <div className="discover_card" onClick={() => navigate(`/films/viewpage/${resData.id}` , resData.id)}>
                        <div className="cards">
                            <div className="image-box">
                                <img src = {`http://image.tmdb.org/t/p/w500${resData.poster_path}`}  width = "350" height="400"/> 
                            </div>
                            <div className="content_bar">
                                <h3>{resData.original_title}</h3>
                            </div>
                        </div>
                    </div>
                </Link>
               )
            })
           } 
       </div>
    )
}
export default Favourite;