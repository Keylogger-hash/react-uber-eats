import {createContext} from "react";

export interface AuthContext {
    isAuth: boolean,
    setIsAuth: ()=>{}
}

export const AuthContext = createContext({});
