import { useNavigate , Link } from "react-router-dom";

export  const ReturnCategory = ({filmsData}) => {
    const navigate = useNavigate();
    return(
            filmsData.map((resultDisc) => {
                return (
                    <>
                    <Link  to="/films/viewpage">
                        <div className="discover_card" onClick={() => navigate(`/films/viewpage/${resultDisc.id}` , resultDisc.id)}>
                            <div className="cards">
                                <div className="image-box">
                                    <img src = {`http://image.tmdb.org/t/p/w500${resultDisc.poster_path}`}  width = "350" height="400"/> 
                                </div>
                                <div className="content_bar">
                                    <h3>{resultDisc.original_title}</h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </>
                );
            })        
    )
}
