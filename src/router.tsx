import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MovieInfoPage, MoviesHomePage, MoviesPage} from "./pages";
import {movieService} from "./services";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'home'}/>},
            {path: 'home', element: <MoviesHomePage/>},
            {
                path: 'movies/:movies_list',
                element: <MoviesPage/>,
                loader: ({request, params}) => {
                    switch (params.movies_list) {
                        case 'all':
                            return movieService.getAll(new URL(request.url).search);
                        case 'popular':
                            return movieService.getPopular(new URL(request.url).search);
                        case 'topRated':
                            return movieService.getTopRated(new URL(request.url).search);
                        case 'upcoming':
                            return movieService.getUpcoming(new URL(request.url).search);
                        case 'latest':
                            return movieService.getLatest(new URL(request.url).search);
                    }

                }
            },
            {path: 'movies/info/:id', element: <MovieInfoPage/>},
        ]
    }

]);

export {router};