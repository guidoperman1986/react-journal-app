import 'firebase/firestore';
import 'firebase/auth';

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDrsox2loX9T2cSoQmsi7fQ1OixCzE3elA",
    authDomain: "react-app-cursos-a4b67.firebaseapp.com",
    projectId: "react-app-cursos-a4b67",
    storageBucket: "react-app-cursos-a4b67.appspot.com",
    messagingSenderId: "812298983564",
    appId: "1:812298983564:web:560d7a90b8aa6ff81b83a9"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider(); //autenticacion con google

export {
    db,
    googleAuthProvider,
};
