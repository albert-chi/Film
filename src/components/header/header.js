import React from "react";
import './header.css';
import logo from "../images/logo.jpg"
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
    const data = [];
    const navigate = useNavigate();
   
    return (
        <>
            <div className="header">
                <nav>
                    <ul>
                        <span className="logo"><a href="#"> <img src={logo} height="60" width="60" /></a></span>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/films">Films</Link></li>
                        <li><Link to="/Favourite">Favourite</Link></li>
                        <div class="dropdown">
                            <button class="dropbtn">Category</button>
                            <div class="dropdown-content">
                                <Link to='/Category/popular'>Popular</Link>
                                <Link to="/Category/Avarage">vote average</Link>
                            </div>
                        </div>
                    </ul>
                </nav>
                {/*Todo: Reformat*/} 
                    <div className="search-bar">
                        <input type="search" placeholder="search"  className="search_input" onChange={(e) =>{
                            data.push(e.target.value)
                            navigate('/Search' , {state:{data}})
                    }}/>
                    </div>
                {/*Todo: Reformat / End*/}
            </div>
       </>
    );
}

export default Header;
