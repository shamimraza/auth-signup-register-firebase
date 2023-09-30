import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCPPiEdezUxltOWSkHe_p7X83fTGdSfFr0",
    authDomain: "auth-signup-register.firebaseapp.com",
    projectId: "auth-signup-register",
    storageBucket: "auth-signup-register.appspot.com",
    messagingSenderId: "190449906688",
    appId: "1:190449906688:web:21b38c2589428a452f14e5"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;