// 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js' firebase/auth
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { DB } from './db.js';
export class Auth {
    constructor(app){
        this.auth = getAuth(app);
        this.db = new DB(app);
    }

    async signUp (email, password, name, type, image) {
        try{
            let user = await createUserWithEmailAndPassword(this.auth, email, password);
            let uid = user.user.uid;
            let token = await user.user.getIdToken();
            localStorage.setItem('uid', uid);
            localStorage.setItem('token', token);
            localStorage.setItem('type', type);
            this.db.createUser(uid, name, type, image);
        }catch(e){
            console.log(e.code);
            console.log(e.message);
        }

    }
    async signIn (email, password, type){
        
       try{
        let user = await signInWithEmailAndPassword(this.auth, email, password);
        let uid = user.user.uid;
        let token = await user.user.getIdToken();
        localStorage.setItem('uid', uid);
        localStorage.setItem('token', token);
        localStorage.setItem('type', type);
       }catch(e){
        console.log(e.code);
        console.log(e.message);
       }
    }

    async signOut(){
        try{
            await signOut(this.auth)
        }catch(e){
            console.log(e.code);
            console.log(e.message);
        }
    }

    checkUserStatus(){
        onAuthStateChanged(this.auth, (user) => {
            if(user){
                this.db.getUser(user.uid)
                .then(user => {
                    
                });
                // console.log(userData)
                // if(userData.type =='student'){
                    
                // }
            }else{
                
            }
        })
    }
};


