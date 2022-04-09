import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAPpmQCOTSxhBzOEVDJKsb0Mrw5Z_LC9Hk",
    authDomain: "netflix-clone-143bc.firebaseapp.com",
    projectId: "netflix-clone-143bc",
    storageBucket: "netflix-clone-143bc.appspot.com",
    messagingSenderId: "1035382031003",
    appId: "1:1035382031003:web:65b5197d92eae66626bc3e"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export default auth;