'use client'
import {signOut,useSession} from "next-auth/react";
import './HeaderUser.css'
export default function HeaderUser(){
    const session = useSession();
    return (
        <div>
            <div>
                {session.data?.user?.name}
            </div>
            <div>
                <button className={'header_user_button'} onClick={()=>signOut()}>Sign out</button>
            </div>
        </div>
    )
}