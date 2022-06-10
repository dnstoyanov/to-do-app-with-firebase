import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD6AavabfVlobYaYmM5Njcb6X_EDUlq000",
  authDomain: "fir-to-do-app-445da.firebaseapp.com",
  databaseURL: "https://fir-to-do-app-445da-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-to-do-app-445da",
  storageBucket: "fir-to-do-app-445da.appspot.com",
  messagingSenderId: "660473907668",
  appId: "1:660473907668:web:bae88ee636863145adae41"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);