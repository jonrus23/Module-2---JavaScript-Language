
// function greetTheStudent(studentName){  //named function
//     return `Hello there ${studentName}`;
// }

const greetTheStudent = studentName => `Hello there ${studentName}`;


const fullName = (firstName, middleName, lastName)=> `${lastName}, ${middleName}. ${firstName}`;


// const student = "John Smith";
// const greet = greetTheStudent(student);
// console.log(greet);


const titleName = fullName("Mary", "R", "Jane");
console.log(titleName);