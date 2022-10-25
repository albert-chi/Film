import { React, useState, useEffect } from "react";
import './films.css';
import { useNavigate} from "react-router-dom";
import { DiscoverMovie } from "../../../api/api";


const Films = () => {
    const [filmsData, setFilmData] = useState([]);
    // Todo: state-i anuny camelCase
    const [numberpage , setnumberpage] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        DiscoverMovie(numberpage)
        .then((res) => setFilmData([ ...filmsData,...res.results]));
    }, [numberpage])

    //effect for scroll Data
     useEffect(() => {
        const handScroll = (e) => {
            const scrollHeight = e.target.documentElement.scrollHeight
            const curHeight = e.target.documentElement.scrollTop + window.innerHeight
            if(curHeight + 1 >= scrollHeight){
                setnumberpage(numberpage + 1);
            }
        }
        window.addEventListener("scroll" , handScroll)
        return() => window.removeEventListener("scroll" , handScroll)
    } , [numberpage])

    return (
        <div className="films">
           {
            filmsData.map((resultDisc) => {
                return (
                    <>
                      {/*Todo: div-y to props chuni*/}
                        <div className="discover_card" to = "/films/viewpage" onClick={() => navigate(`/films/viewpage/${resultDisc.id}` , resultDisc.id)}>
                            <div className="cards">
                                <div className="image-box">
                                    <img src = {`http://image.tmdb.org/t/p/w500${resultDisc.poster_path}`}  width = "350" height="400"/>
                                </div>
                                <div className="content_bar">
                                    <h3>{resultDisc.original_title}</h3>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })
           }
        </div>
    );

}
export default Films;
