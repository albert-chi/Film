import '../category.css';
import { useState, useEffect } from 'react';
import { AvarageData } from '../../../../../api/api';
import { ReturnCategory } from '../returnCategory';


const Avarage = () => {
    const [filmsData, setFilmData] = useState([]);
    const [numberpage , setnumberpage] = useState(1);

    useEffect(() => {
            AvarageData(numberpage)
            .then((res) => setFilmData([...res.results , ...filmsData]));
    }, [numberpage])
    
    //scroll
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
    }, [numberpage])

    return (
        <ReturnCategory filmsData={filmsData} />
    );
}
export default Avarage;