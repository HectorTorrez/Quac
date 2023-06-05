// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn22RnhNdBuEa2E2iBebK-owyakbBcd_w",
  authDomain: "quac-2c26a.firebaseapp.com",
  projectId: "quac-2c26a",
  storageBucket: "quac-2c26a.appspot.com",
  messagingSenderId: "1017505497792",
  appId: "1:1017505497792:web:6e824af1d520bc75222325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)