
import { useState } from "react"
import { useDispatch } from "react-redux"
import {signIn} from "../../Controllers/Redux/authSlice"
import "./login.css"

export default ()=>{

    const dispatch = useDispatch();

    const [formInput,setFormInput] = useState({
        name:"",
        password:"",
    })

    function inputChanged(e){
        setFormInput({
            ...formInput,  // takes existing input and spreads it into local state
            [e.target.name]:e.target.value   // sets local state for name input

        })
    }
    function submit(e){
        dispatch(signIn(formInput));// this dispatches the local staTE form input our to our reducer
        e.preventDefault();

    }


    return(
        <div className="loginBG">
            <form className="login-panel">
            <h1>Login:</h1>
            <input name="name" placeholder="Name" onChange={inputChanged} value={formInput.name}></input>
             <input name="password" type="password" placeholder="Password" onChange={inputChanged} value={formInput.password}></input>
             <button type="submit" onClick={submit}>Login</button>
            </form>
        </div>
    )
}