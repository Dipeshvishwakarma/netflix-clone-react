import React, { useEffect, useState } from 'react'
import "./css/nav.css"
import firebase from 'firebase'

const Nav = () => {

    const [show,handleshow] = useState(false);

    const transitionNavbar=()=>{
        if(window.scrollY>100)
        {
            handleshow(true);
        }
        else
        {
            handleshow(false);
        }
    }

    useEffect(() => {
      window.addEventListener("scroll",transitionNavbar)
      
      return ()=>{
          window.removeEventListener("scroll",transitionNavbar)
      }
    }, [])
    
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className='nav__content'>
            <img src='https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg' className='logo'/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' onClick={()=>firebase.auth().signOut()} className='nav_avatar'/>
        </div>
</div>
  )
}

export default Nav