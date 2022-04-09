import React, { useState } from 'react'
import "./css/login.css"
import SignUp from './SignUp';
const Login = () => {
    const [signIn,setSignIn] = useState(false);
  return (
    <div className='login'>
        <div className='login__header'>
            <img src='https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg' className='login__logo'/>
            <button className='login__button'>
                SignIn
            </button>
        </div>
        <div className='login__body'>
            {
                 signIn?(<SignUp/>):(
                    <>
                    <h1>Unlimited films,TV programmes and more.</h1>
                    <h2>Watch Anywhere,Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <form className='login__form'>
                        <input type='text' placeholder="Email Address"/>
                        <button onClick={()=>setSignIn(true)}>Get Started</button>
                    </form>
                   
                    </>
                )
            }
           
        </div>
        <div className='login__gradient'>

        </div>
    </div>
  )
}

export default Login