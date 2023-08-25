import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';



const firebaseConfig = {
    apiKey: "AIzaSyABcn41q2PDt455oz7MLu4QIYprhWxoV24",
    authDomain: "neflix-4500a.firebaseapp.com",
    projectId: "neflix-4500a",
    storageBucket: "neflix-4500a.appspot.com",
    messagingSenderId: "753184815045",
    appId: "1:753184815045:web:a462baf7e091cfe646bdac",
    measurementId: "G-VRNWSMTDRM"
  };

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;








