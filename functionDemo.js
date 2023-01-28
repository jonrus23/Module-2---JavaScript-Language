var age = 10;
var salary = 15.00;

// console.log(`The variable type of age is ${typeof age}`);
// console.log(`The variable type of salary is ${typeof salary}`);

// var name = "John Smith";
// console.log(`The variable type of name is ${typeof name}`);

const displayGreetings = function(name, year){
    console.log(`Happy New Year ${year} ${name}`);
}

// console.log(`The variable type of displayGreetings is ${typeof displayGreetings}`);


const displayGreetingsWithEmoji = function(name, year){
    console.log(`😃 😃 Happy New Year ${year} ${name} 😃 😃`);
}

const greet = function(name, year, func){
    func(name, year)
}

greet("John Smith", "2023", displayGreetingsWithEmoji);
greet("Jane Doe", "2023", displayGreetings);
