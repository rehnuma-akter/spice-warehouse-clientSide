// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4gNRsZkGLMC37Nj4aufVwu77vFZ0Jouc",
    authDomain: "book-bustle.firebaseapp.com",
    projectId: "book-bustle",
    storageBucket: "book-bustle.appspot.com",
    messagingSenderId: "865874078300",
    appId: "1:865874078300:web:b8504ce8ecb89d4cbd1499",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
