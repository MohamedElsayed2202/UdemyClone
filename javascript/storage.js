import {getStorage, ref, uploadString,uploadBytesResumable, getDownloadURL} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-storage.js'

export class Storage{
    constructor(app){
        this.storage = getStorage(app);
    }
    async uploadUserImage(id, image){
        const profileRef = ref(this.storage, `users/${id}/profile/message.txt`);
        try{
            const message = 'test 123456789'
            const uploadTask = uploadBytesResumable(profileRef,message);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                          console.log('Upload is paused');
                          break;
                        case 'running':
                          console.log('Upload is running');
                          break;
                    }
                },
                (e) => {
                    console.log(e.code);
                    console.log(e.message);
                },
                async ()=>{
                    const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref)
                    console.log('File available at', downloadUrl);
                }
            )
        }catch(e){
            console.log(e.code);
            console.log(e.message);
        }
    }
}