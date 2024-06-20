import { initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth"

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6B8MhrCq9a0o6e5682Jm2baXPCSG7Obc",
  authDomain: "litlounge-4fa8c.firebaseapp.com",
  projectId: "litlounge-4fa8c",
  storageBucket: "litlounge-4fa8c.appspot.com",
  messagingSenderId: "236471925914",
  appId: "1:236471925914:web:2718dbf45d9162f74b3323"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {app, auth}