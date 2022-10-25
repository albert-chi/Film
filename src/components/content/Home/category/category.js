import react from 'react';
import './category.css';
import { useState, useEffect } from 'react';
import { PopularFilm } from '../../../../api/api';
import { ReturnCategory } from './returnCategory';

const Category = () => {
    const [filmsData, setFilmData] = useState([]);
    const [numberpage , setnumberpage] = useState(1);

    useEffect(() => {
            PopularFilm(numberpage)
            .then((res) => setFilmData([...res.results , ...filmsData]));
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
            <ReturnCategory filmsData = {filmsData} />
        </div>
    );


}

export default Category;