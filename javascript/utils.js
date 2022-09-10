export class Utils{
    constructor(){
    }
    static checkType(user){
        if(user.type == 'student'){
            open('http://127.0.0.1:5500/home.html','_self');
        }else{
            open('http://127.0.0.1:5500/admin.html','_self');
        }
    }
}