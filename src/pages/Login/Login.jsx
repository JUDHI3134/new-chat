import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'

const Login = () => {

    const [currentState, setCurrentState] = useState("Sign Up")

  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className='logo' />
      <form className="login-form">
        <h2>{currentState}</h2>
        {currentState === "Sign Up" ? <input type="text" placeholder='username' className='form-input' required />: null}
        <input type="email" placeholder='Enter Email' className='form-input' required />
        <input type="password" placeholder='********' className='form-input' required />
        <button type="submit">{currentState === "Sign Up"? "Create account": "Login"}</button>
        <div className="login-term">
            <input type="checkbox" required/>
            Agree to the term of use & privacy pocily.
        </div>
        <div className="login-forgot">
           {currentState === "Sign Up" ? <p className="login-toggle">Already have an account <span onClick={()=>setCurrentState("Login")}>Login here</span></p>:
            <p className="login-toggle">Don't have account <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>}
        </div>
      </form>
    </div>
  )
}

export default Login
