'use client'
import {signOut,useSession} from "next-auth/react";

export default function HeaderUser(){
    const session = useSession();
    return (
        <div>
            <div>
                {session.data?.user?.name}
            </div>
            <div>
                <button onClick={()=>signOut()}>Sign out</button>
            </div>
        </div>
    )
}