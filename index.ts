console.log("Welcome to the Typescript");
var age:number=25;
console.log(age);
console.log(typeof(age));
var userName="Abu Al Shahriar Rifat";
var IsNumber:boolean=true;
var addNumber=(number1:number,number2:number)=>{
    return number1+number2;
}
console.log(addNumber(100,200));

//data-Type
//any Type
//build type=>string,number,boolen,void,null,
//user-define Types:arrays,Enums,Class,interfaces
var userId:any=736353;
var firstName:string="Abu Al Shahriar";
var lastName:string="Rifat";
var IsAccountActivated:boolean=true;
var fullName:string=firstName.concat(lastName);

console.log(`My Id Is=${userId} firstName=${firstName} last-name=${lastName} and your
acoount Is Accivated =${IsAccountActivated}`)

console.log("My Full Name is "+fullName);
console.log(fullName.split(''));
var uppercase=firstName.toUpperCase();
console.log(uppercase);


//function
function display():void{
    console.log("HI I am displaying");
}
display();




