import './LoginForm.css'


export const LoginForm = ()=>{
    return (
        <div className={'login_form'}>
            <label htmlFor={"username"}>Username</label>
            <input className={"login_input"} type={"text"} id={"username"}/>
            <label htmlFor={"password"}>Password</label>
            <input className={"login_input"} type={"password"} id={"password"}/>
            <button>Submit</button>
        </div>
    )
}