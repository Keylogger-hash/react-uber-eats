import {useContext,createContext,useState,useEffect} from "react";
import {SignInMethod} from "firebase/auth"
import {JSXElement} from "@babel/types";

const FirebaseContext = createContext(null)


export const FirebaseContextProvider = (children:JSXElement)=>{
    const [firebaseUser,setFirebaseUser] = useState(null)

}
