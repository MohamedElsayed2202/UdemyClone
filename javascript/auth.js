// 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js'
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { DB } from './db.js';
export class Auth {
    constructor(app){
        this.auth = getAuth(app);
        this.db = new DB(app);
    }

    async signUp (email, password, name, type) {
        try{
            let user = await createUserWithEmailAndPassword(this.auth, email, password);
            let uid = user.user.uid;
            console.log(uid);
            let token = await user.user.getIdToken();
            localStorage.setItem('uid', uid);
            localStorage.setItem('token', token);
            this.db.createUser(uid, name, type);
        }catch(e){
            console.log(e)
        }

    }
};


