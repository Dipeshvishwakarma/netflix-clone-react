import React, {  useState } from 'react'
import "./css/login.css"
import auth from "./firebase";


const SignUp = () => {

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  const register = (e) =>{
   e.preventDefault();
   
   //console.log(email,password );
  auth.createUserWithEmailAndPassword(email,password 
  ).then(authUser=>
    console.log(authUser)).catch(err=>alert(err.message))
  };

  const signIn =(e)=>{
     e.preventDefault();
     auth.signInWithEmailAndPassword(email,password 
      ).then(authUser=>
        console.log(authUser)).catch(err=>alert(err.message))
  };
  return (
    <div className='signUpScreen'>
       <form>
           <h1>Sign In</h1>
           <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder="Email"/>
           <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password'/>
           <button onClick={signIn}>Sign In</button>

           <h4>New to Netflix <span onClick={register}>Sign Up Now.</span></h4>
       </form>
    </div>
  )
}

export default SignUp