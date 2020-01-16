// const _ = require('underscore');

// var name = {
//     firstName : "Default",
//     lastName : "Default",
//     getFullName : function() {
//         return this.firstName + " " + this.lastName
//     }
// }

// var john = {
//     firstName : "Narayan",
//     lastName : "Shrestha",
// }

// //never use like this only for example
// // console.log(name.getFullName()); 

// john.__proto__ = name;
// // console.log(person.getFullName());



// for (var prop in john) {

//     if(john.hasOwnProperty(prop)){ 
//         console.log(prop + " " + john[prop]); 
//     }

//     // console.log(prop + " " + john[prop]); //with getfullName
// }
// //upto here

// var jane = {
//     addresss : "Kathmandu ",
//     getFormalFullName : function() {
//         return this.lastName + " " + this.firstName;
//     }
// }

// var jim = {
//     addresss : "Jim address ",
//     getFirstName : function() {
//         return this.firstName;
//     }
// }

// // _.extend(john, jane, jim);
// _.extend(john, jane);

// console.log(john.getFormalFullName(),"hehehe");


// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     console.log("this is called");
//     console.log("here is the data");
// }

// //saving memory space
// Person.prototype.getFullName = function() {
//     return this.firstName + " "+ this.lastName;
// }

// // console.log(Person.getFullName(), "before")

// var john = new Person("John", "Doe");

// console.log(john, "after")

// Person.prototype.getLastName = function() {
//     return this.lastName;
// }

// console.log(john.getLastName())

// String.prototype.isLengthGreateThan = function(limit) {
//     return this.length > limit;
// }

// let a = "dfdfdfd"
// console.log(a.isLengthGreateThan(3));

var person = {
    firstName : "Default",
    lastName : "Default",
    greet : function() {
        return "Hi" + " " + this.firstName + " " + this.lastName
    }
}

var john = Object.create(person);

john.firstName = "Narayan";
john.lastName = "Shrestha";

console.log(john.greet());

 