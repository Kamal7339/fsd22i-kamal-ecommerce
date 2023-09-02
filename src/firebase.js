import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import the authentication service
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACbbJ7hw-0MrWUYpdsgqmB6BRTNGwx8Lc",
    authDomain: "ecommerce-311e0.firebaseapp.com",
    projectId: "ecommerce-311e0",
    storageBucket: "ecommerce-311e0.appspot.com",
    messagingSenderId: "600103026426",
    appId: "1:600103026426:web:5ff6af631db521eedcd343"
  };


const app = initializeApp(firebaseConfig);


const auth = getAuth(app); 
const db = getFirestore(app);
const storage = getStorage(app);


export {db, auth,storage };

