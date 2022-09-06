// 'https://www.gstatic.com/firebasejs/9.9.4/firebase'
import {getFirestore, collection, addDoc, setDoc, doc} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';

export class DB {
    constructor(app){
        this.db = getFirestore(app);
    }
    async createUser(id, name, type){
        try{
              await setDoc(doc(this.db,'users',id),{
                name: name,
                type: type
             })
             console.log('done');
        }catch(e){
            console.log(e);
        }
    }
}