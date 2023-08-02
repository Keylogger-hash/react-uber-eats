import {AuthStatus} from '@/helpers/constants/auth'
export interface IAuthProps {
    isAuth?:AuthStatus
    toggle?:(isAuth:AuthStatus)=>{}
}