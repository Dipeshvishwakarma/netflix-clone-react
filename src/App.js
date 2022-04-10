import React, { useEffect } from 'react';
import HomeScreen from './HomeScreen';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import firebase, { auth } from 'firebase';



function App() {
 const user = useSelector(selectUser);
 const dispatch = useDispatch();

 useEffect(() => {
   firebase.auth().onAuthStateChanged(user=>{
     if(user)
     {
       dispatch(login({
         uid:user.uid,
         email:user.email
       }));
     }
     else
     {
       dispatch(logout);
     }
   })
 }, [])
 
 //console.log(user);
  return (
    <div className="App">
      {
        !user ? (<Login/>):(<HomeScreen/>)
      }
      
    </div>
  );
}

export default App;
