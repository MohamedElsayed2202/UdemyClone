// 'https://www.gstatic.com/firebasejs/9.9.4/firebase'
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';

export class Auth {
    constructor(app){
        this.auth = getAuth(app);
    }

    async SignUp (email, password) {
        try{
            var user = await createUserWithEmailAndPassword(this.auth, 'beado@gmail.com', 123456);
            console.log(user.user.uid)
        }catch(e){
            console.log(e)
        }
        

    }
};


