import React from "react";
import './home.css';
import { useEffect, useState} from "react";
import { PopularFilm } from "../../../api/api";
import { AvarageData } from "../../../api/api";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {

  const [popularData , setPopularData] = useState([]);
  const[avgData, setavg] = useState([])
  const navigate = useNavigate();

    useEffect(() => {
      PopularFilm(1)
      .then((resSort) => setPopularData([...popularData, ...resSort.results]))
    }, [])

    useEffect(() => {
      AvarageData(1)
      .then((avgSort) => setavg([...avgData, ...avgSort.results]))
    }, [])

    return (
      <>

        <div className="home">
              <h2 className="popular_name">Popular</h2>
              {
                popularData.slice(0,3).map((PopResult) => {
                      return(
                        <Link to="/films/viewpage">
                          <div className="discover_card"  onClick={() => navigate(`/films/viewpage/${PopResult.id}` , PopResult.id)}>
                              <div className="cards">
                                  <div className="image-box">
                                      <img src = {`http://image.tmdb.org/t/p/w500${PopResult.poster_path}`}  width = "350" height="400"/>
                                  </div>
                                  <div className="content_bar">
                                      <h3>{PopResult.original_title}</h3>
                                  </div>
                              </div>
                          </div>
                        </Link>
                      )
                })
              }
               <h2 className="popular_name">Avarage</h2>
              {
                avgData.slice(0,3).map((PopResult) => {
                    return(
                      <Link  to="/films/viewpage">
                        <div className="discover_card" onClick={() => navigate(`/films/viewpage/${PopResult.id}` , PopResult.id)}>
                            <div className="cards">
                                <div className="image-box">
                                    <img src = {`http://image.tmdb.org/t/p/w500${PopResult.poster_path}`}  width = "350" height="400"/>
                                </div>
                                <div className="content_bar">
                                    <h3>{PopResult.original_title}</h3>
                                </div>
                            </div>
                        </div>
                      </Link>
                    )
              })
            }
        </div>
      </>
    );
}
export default Home;
