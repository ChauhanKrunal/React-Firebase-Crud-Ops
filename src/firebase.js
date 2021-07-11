import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCpMD1Gfe-0gEmaXda-TRRXUBUMZTFLBrg",
  authDomain: "directory-of-schools-31135.firebaseapp.com",
  projectId: "directory-of-schools-31135",
  storageBucket: "directory-of-schools-31135.appspot.com",
  messagingSenderId: "987637808244",
  appId: "1:987637808244:web:4adc7e1f63b130a721a521",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
