// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
//
let foo;

foo = 'hello';
console.log(foo);
document.write(foo);
alert(foo);

foo = 'owu';
console.log(foo);
document.write(foo);
alert(foo);

foo = 'com';
console.log(foo);
document.write(foo);
alert(foo);

foo = 1;
console.log(foo);
document.write(foo);
alert(foo);

foo = 10;
console.log(foo);
document.write(foo);
alert(foo);

foo = -999;
console.log(foo);
document.write(foo);
alert(foo);

foo = 123;
console.log(foo);
document.write(foo);
alert(foo);

foo = 3.14;
console.log(foo);
document.write(foo);
alert(foo);

foo = 2.7;
console.log(foo);
document.write(foo);
alert(foo);

foo = 16;
console.log(foo);
document.write(foo);
alert(foo);

foo = true;
console.log(foo);
document.write(foo);
alert(foo);

foo = false;
console.log(foo);
document.write(foo);
alert(foo);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
let firstName = 'Bida';
let middlName = 'Serhiy';
let lastName = 'Volodymyrovych';
let person = `${firstName} ${middlName} ${lastName}`;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
let a = 100;
console.log(typeof a);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('Whats your name?');
console.log(name);

let second = prompt('Whats your last name?');
console.log(second);

let age = prompt('How old are you?');
console.log(age);