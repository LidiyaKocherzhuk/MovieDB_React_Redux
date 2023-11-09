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
                path: 'movies',
                element: <MoviesPage/>,
                loader: ({request}) => movieService.getAll(
                    new URL(request.url).search
                )
            },
            {path: 'movies/info/:id', element: <MovieInfoPage/>},
        ]
    }

]);

export {router};