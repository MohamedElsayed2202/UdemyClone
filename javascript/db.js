// 'https://www.gstatic.com/firebasejs/9.9.4/firebase' firebase/firestore
import {getFirestore, collection, addDoc, setDoc, doc, getDoc} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { User } from './modals/user.js';
export class DB {
    constructor(app){
        this.db = getFirestore(app);
    }

    async createUser(id, name, type, image){
        try{
              await setDoc(doc(this.db,'users',id),{
                name: name,
                type: type,
                image: image
             })
             console.log('done');
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
                docSnap.data().type
                );
            return user;
        }catch(e){
            console.log(e.code);
            console.log(e.message);
        }
    }
}