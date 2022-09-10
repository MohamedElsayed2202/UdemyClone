// 'https://www.gstatic.com/firebasejs/9.9.4/firebase' firebase/firestore
import {getFirestore, collection, addDoc, setDoc, doc, getDoc} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { User } from './modals/user.js';
import { Utils } from './utils.js';
export class DB {
    constructor(app){
        this.db = getFirestore(app);
    }

    async createUser(id, name, type, image){
        try{
            let user = new User(id,name,type)
              await setDoc(doc(this.db,'users',id),{
                name: name,
                type: type,
                image: image
             })
             localStorage.setItem('user',JSON.stringify(user));
             Utils.checkType(user);
        }catch(e){
            console.log(e);
        }
    }
    async getUser(id){
        try{
            const docRef = doc(this.db, 'users', id);
            const docSnap = await getDoc(docRef);
            const user = new User(
                docSnap.id,
                docSnap.data().name,
                docSnap.data().type,
                docSnap.data().image
                );
            return user;
        }catch(e){
            console.log(e.code);
            console.log(e.message);
        }
    }
}