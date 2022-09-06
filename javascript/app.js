// import {initializeApp} from 'firebase/app';
// import {firebaseConfig} from '../config';
// import {Auth} from './auth'
// // const config = require('../config');
// const app = initializeApp(firebaseConfig);
// const auth = new Auth(app);
// auth.SignUp();
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBTNtE77ZFyWiB8F8low9IpAr7hT-mBqvI",
    authDomain: "udemy-clone-69601.firebaseapp.com",
    projectId: "udemy-clone-69601",
    storageBucket: "udemy-clone-69601.appspot.com",
    messagingSenderId: "1032707806231",
    appId: "1:1032707806231:web:c76c757ff5910e9e6bf852"
  };
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  createUserWithEmailAndPassword(auth, 'beadoo@gmail.com', 123456)
  .then(createUser => {
    console.log(createUser.user.uid);
  })
  .catch(e => console.log(e))


