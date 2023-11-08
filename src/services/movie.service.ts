import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IMoviePage} from "../interfaces";
import {IRes} from "../types";

const movieService = {
    getAll: (): IRes<IMoviePage> => axiosService.get(urls.movies).then(),
    getLatest: (): IRes<IMoviePage> => axiosService.get(urls.latest).then(),
};

export {movieService};