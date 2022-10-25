

import { BASE_URL, apikey , Path_Discover} from "./contact";

export const DiscoverMovie = (page) => {
    return(
        fetch (`${BASE_URL}${Path_Discover}?api_key=${apikey}&page=${page}`)
        .then((res) => res.json())
    )
}

export const MovieViewPage = (id) => {
    return(
        fetch(`${BASE_URL}/movie/${id}?api_key=${apikey}`)
        .then((res) => res.json())
    )
}
export const PostDataFavourite = (movie) => {
    return(
        fetch(` http://localhost:5000/posts`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(movie)
          })
    )
}

export const SearchApi = (query) => {

    return(
        fetch(`${BASE_URL}/search/movie/?api_key=${apikey}&query=${query}`)
        .then((res) => res.json())
    )
}

export const PopularFilm = () => {
    // Todo: Add pagination
    return(
        fetch (`${BASE_URL}${Path_Discover}?api_key=${apikey}&sort_by=popularity.desc`)
        .then((res) => res.json())
    )
}

export const AvarageData = (page) => {
    return(
        fetch (`${BASE_URL}${Path_Discover}?api_key=${apikey}&page=${page}&sort_by=vote_avarage.desc`)
        .then((res) => res.json())
    )
}
