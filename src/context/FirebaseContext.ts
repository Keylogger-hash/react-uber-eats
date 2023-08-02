import {useContext,createContext,useState,useEffect} from "react";
import {SignInMethod} from "firebase/auth"

import {JSXElement} from "@babel/types";
import {clientFirebase,app} from "@/firebase/config";
import firebase from "firebase/compat";

const FirebaseContext = createContext<{user:app.User|null}>({user:null})
export const useAuthFirebaseContext = () => useContext(FirebaseContext);


export const FirebaseContextProvider = (children:JSXElement)=>{
    const [firebaseUser,setFirebaseUser] = useState<app.User|null>({})
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (user) {
                setUser(firebaseUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <FirebaseContext.Provider value={{ firebaseUser }}>
            {loading ? <div>Loading...</div> : children}
        </FirebaseContext.Provider>
    );


}
