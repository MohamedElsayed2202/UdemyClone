// 'https://www.gstatic.com/firebasejs/9.9.4/firebase'
import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js';
import {Auth} from './auth.js'
import { DB } from './db.js';
import { Storage } from './storage.js';
const firebaseConfig = {
  apiKey: "AIzaSyBTNtE77ZFyWiB8F8low9IpAr7hT-mBqvI",
  authDomain: "udemy-clone-69601.firebaseapp.com",
  projectId: "udemy-clone-69601",
  storageBucket: "udemy-clone-69601.appspot.com",
  messagingSenderId: "1032707806231",
  appId: "1:1032707806231:web:c76c757ff5910e9e6bf852"
};
const app = initializeApp(firebaseConfig);
const db = new DB(app);
const auth = new Auth(app);
auth.checkUserStatus();
$(document).ready(function(){
  $('#login__form').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    var password = $('#password').val();
    console.log(email);
    console.log(password);
    auth.signIn(email,password);
    this.reset();
  })
});
// auth.checkUserStatus();
// const storage = new Storage(app);
// storage.uploadUserImage(123456)
// auth.signUp('beado@gmail.com',123456,'Mohamed Elsayed', 'student');
// auth.signUp('beeado@gmail.com',123456,'Mohamed Zayed', 'instructor');


