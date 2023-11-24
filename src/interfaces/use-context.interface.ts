export interface IUseContext {
    theme: boolean,
    setTheme: () => void,
    genresVisibility: boolean
    setGenresVisibility: () => void,
    posterPath: string,
    setPosterPath: (value: string) => void,
    queryParams: {
        page?: string,
        with_genres?: string,
        query?: string,
    },
    setQueryParams: (value: {}) => void,
}