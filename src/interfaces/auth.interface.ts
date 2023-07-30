import {AuthStatus} from '@/helpers/constants/auth'
export interface AuthProps {
    isAuth:AuthStatus
    setAuth:()=>{}
}