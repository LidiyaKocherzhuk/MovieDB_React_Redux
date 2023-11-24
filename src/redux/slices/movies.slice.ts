import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";

import {IMoviePage, IQueryParams} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    allMoviesPage: IMoviePage;
    popularMoviesPage: IMoviePage;
    topRatedMoviesPage: IMoviePage;
    upcomingMoviesPage: IMoviePage;
    latestMoviesPage: IMoviePage;
    query: IQueryParams;
    error: boolean;
}

const initialState: IState = {
    allMoviesPage: null,
    popularMoviesPage: null,
    topRatedMoviesPage: null,
    upcomingMoviesPage: null,
    latestMoviesPage: null,
    query: {},
    error: false,
}

//Change all by one

const getAllMovies = createAsyncThunk<{ all: IMoviePage }, { movies_list: string, query: string }>(
    'movieSlice/getAllMovies',
    async ({movies_list, query}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(query);
            return {all: data}
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const getPopularMovies = createAsyncThunk<{ popular: IMoviePage }, { movies_list: string, query: string }>(
    'movieSlice/getPopularMovies',
    async ({movies_list, query}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getPopular(query);
            return {popular: data}
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const getTopRatedMovies = createAsyncThunk<{ topRated: IMoviePage }, { movies_list: string, query: string }>(
    'movieSlice/getTopRatedMovies',
    async ({movies_list, query}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getTopRated(query);
            return {topRated: data}
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const getUpcomingMovies = createAsyncThunk<{ upcoming: IMoviePage }, { movies_list: string, query: string }>(
    'movieSlice/getUpcomingMovies',
    async ({movies_list, query}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getUpcoming(query);
            return {upcoming: data}
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const getLatestMovies = createAsyncThunk<{ latest: IMoviePage }, { movies_list: string, query: string }>(
    'movieSlice/getLatestMovies',
    async ({movies_list, query}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getLatest(query);
            return {latest: data}
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                console.log(action.payload, 'all');
                state.allMoviesPage = action.payload.all;
            })
            .addCase(getPopularMovies.fulfilled, (state, action) => {
                console.log(action.payload, 'popular');
                state.allMoviesPage = action.payload.popular;
            })
            .addCase(getTopRatedMovies.fulfilled, (state, action) => {
                console.log(action.payload, 'topRated');
                state.allMoviesPage = action.payload.topRated;
            })
            .addCase(getUpcomingMovies.fulfilled, (state, action) => {
                console.log(action.payload, 'upcoming');
                state.allMoviesPage = action.payload.upcoming;
            })
            .addCase(getLatestMovies.fulfilled, (state, action) => {
                console.log(action.payload, 'latest');
                state.allMoviesPage = action.payload.latest;
            })
            .addMatcher(isFulfilled(
                getAllMovies,
                getPopularMovies,
                getTopRatedMovies,
                getUpcomingMovies,
                getLatestMovies,
            ), state => {
                state.error = false;
            })
            .addMatcher(isRejected(
                getAllMovies,
                getPopularMovies,
                getTopRatedMovies,
                getUpcomingMovies,
                getLatestMovies,
            ), state => {
                state.error = true;
            })
    }
});

const {
    reducer: movieReducer,
    actions,
} = movieSlice;

const movieActions = {
    ...actions,
    getAllMovies,
    getPopularMovies,
    getTopRatedMovies,
    getUpcomingMovies,
    getLatestMovies,
};

export {
    movieReducer,
    movieActions,
}