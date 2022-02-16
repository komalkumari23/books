import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDQCL81_qBugjVSvRUzH3sjKqFtOoWt-4c",
    authDomain: "e-book-94a8f.firebaseapp.com",
    projectId: "e-book-94a8f",
    storageBucket: "e-book-94a8f.appspot.com",
    messagingSenderId: "982027630566",
    appId: "1:982027630566:web:0dc40771450dbcdf870827",
  };

  
const app = initializeApp(firebaseConfig);  
export const auth=getAuth(app);