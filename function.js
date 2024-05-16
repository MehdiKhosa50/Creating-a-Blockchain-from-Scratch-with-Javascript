function studentData({firstname,lastname,age}){
    var student={
        firstname:firstname,
        lastname:lastname,
        age:age
    }
    return student;
}
var student1 = studentData({firstname:"Mehdi",lastname:"Khosa",age:22});
console.log(student1);

/*function addition(num1,num2){
    return num1+num2;
}
function subs(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
console.log(addition(5,5));
console.log(subs(5,5));
console.log(multiply(5,5));
console.log(divide(5,5));*/