// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm4xl3fGqNVCNqYmtumWn2Ntv8eaTghVs",
  authDomain: "testauth-89f9a.firebaseapp.com",
  projectId: "testauth-89f9a",
  storageBucket: "testauth-89f9a.appspot.com",
  messagingSenderId: "9253893219",
  appId: "1:9253893219:web:c734db53d7a47c056a7456"
};
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);

}
export { firebase };
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
