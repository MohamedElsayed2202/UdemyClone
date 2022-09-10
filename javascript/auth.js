// 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js' firebase/auth
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { DB } from './db.js';
import { Utils } from './utils.js';

export class Auth {
    constructor(app){
        this.auth = getAuth(app);
        this.db = new DB(app);
    }

    async signUp (email, password, name, type, image) {
        try{
            let user = await createUserWithEmailAndPassword(this.auth, email, password);
            let uid = user.user.uid;
            this.db.createUser(uid, name, type, image);
        }catch(e){
            console.log(e.code);
            console.log(e.message);
        }

    }
    async signIn (email, password){
       try{
        let userCred = await signInWithEmailAndPassword(this.auth, email, password);
        let uid = userCred.user.uid;
        this.db.getUser(uid)
        .then(user => {
            localStorage.setItem('user',JSON.stringify(user));
            console.log(user);
            Utils.checkType(user);
        })
       }catch(e){
        console.log(e.code);
        switch (e.code) {
            case 'auth/user-not-found':
                alert('Email not found');
                break;
            case 'auth/wrong-password':
                alert('Wrong password');
                break;
            default:
                break;
        }
       }
    }

    async signOut(){
        try{
            await signOut(this.auth)
        }catch(e){
        }
    }

    checkUserStatus(){
        if(location.href == 'http://127.0.0.1:5500/index.html'){
            onAuthStateChanged(this.auth, (user) => {
                if(user){
                    this.db.getUser(user.uid)
                    .then(user => {
                        Utils.checkType(user);
                    });
                }else{
                    open('http://127.0.0.1:5500/login.html','_self');
                }
            });
        }
    }
};


