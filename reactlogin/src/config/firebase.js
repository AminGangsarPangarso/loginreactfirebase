
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAdnNWBcaJ97swUQsbPetld5_cJhMYWiQ8",
  authDomain: "projectauthlogin-7ccf2.firebaseapp.com",
  projectId: "projectauthlogin-7ccf2",
  storageBucket: "projectauthlogin-7ccf2.appspot.com",
  messagingSenderId: "466962358799",
  appId: "1:466962358799:web:22858d74738b04caa2b97a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const firebaseAuthentication = getAuth(app)

