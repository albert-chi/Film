import react from 'react';
import Home from '../components/content/Home/home';
import Films from '../components/content/films/films';
import Category from '../components/content/Home/category/category';
import Avarage from '../components/content/Home/category/avarage/avarage';
import Search from '../components/header/search/search';
import Page from '../components/content/films/viewpage/page';
import Favourite from '../components/content/favourite/favourite';
import {
    Routes,
    Route
  } from "react-router-dom";


const MainRoutes = () => {
    return(
        <Routes>
          {/*Todo: Reformat to <Route />*/}
            <Route  path = "/" element = {<Home />}></Route>
            <Route path = "films" element = {<Films />}></Route>
            <Route path='films/viewpage/:id' element = {<Page />}></Route>
            <Route path = 'Category/popular' element = {<Category />}></Route>
            <Route path = "Category/Avarage" element = {<Avarage />}></Route>
            <Route path = "Favourite" element = {<Favourite />}></Route>
            <Route path = "Search" element = {<Search />} ></Route>
          {/*Todo: Reformat to <Route /> / End*/}
        </Routes>
    )
}
export default MainRoutes;
