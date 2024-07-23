export interface IAppContext {
    user: string
    islogedIn: boolean
    setlsLogedIn: (islogedIn: boolean) => void
}