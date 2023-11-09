import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMoviePage} from "../interfaces";

const movieService = {
    getAll: (queryParams: string): IRes<IMoviePage> => axiosService.get(urls.movies + queryParams).then(),
    getLatest: (): IRes<IMoviePage> => axiosService.get(urls.latest).then(),
};

export {movieService};