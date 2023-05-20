
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const movieService = {
    getAll:(page=1) => axiosService.get(urls.movies, {params:{page:page}}),
    getGenres:() => axiosService.get('/genre/movie/list'),
    search:(movie) => axiosService.get(`${urls.search}${movie}`),
    genres:() => axiosService.get(urls.genres),
    movieById:(id) => axiosService.get(`${urls.movieById}/${id}`),
    movieByGenresId:(page=1, id) => axiosService.get(urls.genresById,{params:{page:page, with_genres:id}})
}

export {
    movieService
}