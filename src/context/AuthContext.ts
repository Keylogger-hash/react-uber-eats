import {createContext} from "react";

export interface AuthContext {
    user:string,
    password:string
}

export const AuthContext = createContext({});
