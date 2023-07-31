import {createContext} from "react";
import {IAuthProps} from "@/interfaces/auth.interface";


export const AuthContext = createContext<IAuthProps>({});
