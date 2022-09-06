import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

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


