import React from "react";
import './home.css';
import { useEffect, useState} from "react";
import { PopularFilm } from "../../../api/api";
import { AvarageData } from "../../../api/api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // Todo: Naming-nery xarn en, setavg -> setAvgData
  // Todo: Ete popular-i state-i anuny popularData-a, avg-in el petqa avgData lini, tramabanutyuny petqa nuyny lini, qani vor nman data-ya pahvum
  const [popularData , setPopularData] = useState([]);
  const[avg, setavg] = useState([])
  const navigate = useNavigate();

    useEffect(() => {
      // Todo: Argument es poxancel bayc function-y chi vercnum
      PopularFilm(1)
      .then((resSort) => setPopularData([...popularData, ...resSort.results]))
    }, [])

    useEffect(() => {
      AvarageData(1)
      .then((avgSort) => setavg([...avg, ...avgSort.results]))
    }, [])

    return (
      <>

        <div className="home">
              <h2 className="popular_name">Popular</h2>
              {
                popularData.slice(0,3).map((PopResult) => {
                    // Todo: dzevavor pakagcery estegh petq chi
                    {
                    // Todo: dzevavor pakagcery estegh petq chi / End
                      // Todo: div-y to prop chuni
                      return(
                        <div className="discover_card" to = "/films/viewpage" onClick={() => navigate(`/films/viewpage/${PopResult.id}` , PopResult.id)}>
                            <div className="cards">
                                <div className="image-box">
                                    <img src = {`http://image.tmdb.org/t/p/w500${PopResult.poster_path}`}  width = "350" height="400"/>
                                </div>
                                <div className="content_bar">
                                    <h3>{PopResult.original_title}</h3>
                                </div>
                            </div>
                        </div>
                      )
                    // Todo: dzevavor pakagcery estegh petq chi
                    }
                    // Todo: dzevavor pakagcery estegh petq chi / End
                })
              }
               <h2 className="popular_name">Avarage</h2>
              {
                avg.slice(0,3).map((PopResult) => {
                  // Todo: dzevavor pakagcery estegh petq chi
                  {
                  // Todo: dzevavor pakagcery estegh petq chi / End
                    // Todo: div-y to prop chuni
                    return(
                      <div className="discover_card" to = "/films/viewpage" onClick={() => navigate(`/films/viewpage/${PopResult.id}` , PopResult.id)}>
                          <div className="cards">
                              <div className="image-box">
                                  <img src = {`http://image.tmdb.org/t/p/w500${PopResult.poster_path}`}  width = "350" height="400"/>
                              </div>
                              <div className="content_bar">
                                  <h3>{PopResult.original_title}</h3>
                              </div>
                          </div>
                      </div>
                    )
                  // Todo: dzevavor pakagcery estegh petq chi
                  }
                  // Todo: dzevavor pakagcery estegh petq chi / End
              })
            }
        </div>
      </>
    );
}
export default Home;
