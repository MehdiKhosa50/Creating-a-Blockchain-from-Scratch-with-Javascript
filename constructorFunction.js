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

var userOne = new User("Mehdi Khosa","mehdikhosa50@gmail.com");
console.log(userOne);
console.log(userOne.userLogin());
console.log(userOne.userLogout());