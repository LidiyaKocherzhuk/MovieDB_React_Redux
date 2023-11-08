import axios, {InternalAxiosRequestConfig} from "axios";

import {baseURL} from "../constants";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((request): InternalAxiosRequestConfig => {
    request.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2Q3YzQyYzVkZTE2Zjc4NDY0OGIyNzhkNjU0MGVhOSIsInN1YiI6IjYyMDExNzE1MzI2ZWMxMDA2N2U1Mzg2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L6YjUgzllZAcePf3vmd0W-oBPNhackAQ2pYvEdsvlpk'

    return request;
})

export {axiosService};