export interface IUseContext {
    theme: boolean,
    setTheme: () => void,
    genresVisibility: boolean
    setGenresVisibility: () => void,
    posterPath: string,
    setPosterPath: (value: string) => void,
}