import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMoviePage, IQueryParams} from "../interfaces";

const movieService = {
    getAll: (queryParams: IQueryParams): IRes<IMoviePage> => axiosService.get(urls.movies, {params: queryParams}).then(),
    getLatest: (): IRes<IMoviePage> => axiosService.get(urls.latest).then(),
};

export {movieService};