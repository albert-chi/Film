import react from 'react';
import './category.css';
import { useState, useEffect } from 'react';
import { PopularFilm } from '../../../../api/api';
import { ReturnCategory } from './returnCategory';

const Category = () => {
    const [filmsData, setFilmData] = useState([]);
    //const [numberpage , setnumberpage] = useState(1);

    useEffect(() => {
            PopularFilm()
            .then((res) => setFilmData([...res.results , ...filmsData]));
    }, [])

       
    return (
        <div className="films">
            <ReturnCategory filmsData = {filmsData} />
        </div>
    );


}

export default Category;