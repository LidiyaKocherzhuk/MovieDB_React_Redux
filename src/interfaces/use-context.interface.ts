export interface IUseContext {
    theme: boolean,
    setTheme: (value: boolean) => void,
    backdropPath: string
    setBackdropPath: (value: string) => void,
}