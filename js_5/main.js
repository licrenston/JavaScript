// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let foo1 = (a, b) => a * b;
console.log(foo1(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let Pi = 3.14;
function foo2 (Pi, r) {
    return Pi * r * r;
}
console.log(foo2(Pi, 15));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function foo3 (r, h) {
    return 3.14 * r * (r * h);
}
console.log(foo3(5, 5));


// - створити функцію яка приймає масив та виводить кожен його елемент

let array = [100, 500, 700];
function foo4(arr) {
        console.log(arr);
    }
foo4(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function foo5(text) {
    document.write(`<p>${text}</p>`);
}
foo5('text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function foo6(text) {
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
}

foo6('text');

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
function foo7(text, count) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
foo7('text',5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array2 = [100, 'hello', true];
function foo8(arr){
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ul>`);
}
foo8(array2);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let array3 = [
    {
        id: 11,
        name: 'Petya',
        age: 25
    },
    {
        id: 21,
        name: 'Lesja',
        age: 35
    },
    {
        id: 31,
        name: 'Marta',
        age: 45
    }
]
function foo9(arr) {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id}--${arrElement.name}--${arrElement.age}</div>`)
    }
}
foo9(array3)
// - створити функцію яка повертає найменьше число з масиву

const arr = [1, 15, -15, -33, 125]
const findMin = (array) => {
    let min = array[0]
    for (let item of array) {
        if (min > item) {
            min = item
        }
    }
    return min
}
console.log(findMin(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arr2 = [2, 4, 12];
function foo10(arr){
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}
console.log(foo10(arr2));