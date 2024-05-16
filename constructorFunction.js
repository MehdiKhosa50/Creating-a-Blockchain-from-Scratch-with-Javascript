 function User(userName,email){
    this.userName=userName,
    this.email=email,
    this.userLogin = function(){
        console.log(this.email+" "+"has been logged in.")
    }
}
User.prototype.userLogout=function(){
    console.log(this.email+" "+"Has been logged Out.")
}

var user_1 = new User("Mehdi Khosa","mehdikhosa50@gmail.com");
console.log(user_1);
console.log(user_1.userLogin());
console.log(user_1.userLogout());


// constructorFunction
 