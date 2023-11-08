import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {AxiosResponse} from "axios";
import {IMovie} from "../interfaces";

const movieService = {
    getAll: (): Promise<AxiosResponse<{page: number, results: IMovie[]}>> => axiosService.get(urls.movies).then(),
    getLatest: () => axiosService.get(urls.latest).then(),
};

export {movieService};