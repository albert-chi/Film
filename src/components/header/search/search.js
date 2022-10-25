import react from 'react';
import { useLocation,useNavigate, Link } from 'react-router-dom';
import { useEffect , useState} from 'react';
import "../../content/films/films.css";
import { SearchApi } from '../../../api/api';
const Search = () =>{
    const [numberpage , setnumberpage] = useState(1);
    const [searchData, setSearchData] = useState([])
    const location = useLocation();
    const navigate = useNavigate();
    
   
    useEffect (() => {
            SearchApi(location.state.data)
            .then((SearchResult) => setSearchData([...SearchResult.results, ...searchData]));  
    }, [location.state.data])
   

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

    return(
       <div>
            {
                searchData.map((resSearchData) => {
                    return(
                        <>
                            <Link to="/films/viewpage">
                                <div className="discover_card"  onClick={() => navigate(`/films/viewpage/${resSearchData.id}` , resSearchData.id)}>
                                    <div className="cards">
                                        <div className="image-box">
                                            <img src = {`http://image.tmdb.org/t/p/w500${resSearchData.poster_path}`}  width = "350" height="400"/> 
                                        </div>
                                        <div className="content_bar">
                                            <h3>{resSearchData.original_title}</h3>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </>
                    )
                })
            }
       </div>
    );
}

export default Search;