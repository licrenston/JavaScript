// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const music = ['techno', 'rock', 69, 999, false, true, 'nan', 'null', 3.14, 'end'];
console.log(music);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const book = {
    title: 'Puaro',
    pageCounte: 100,
    genre: 'dedektive'
}
const book1 = {
    title: 'Potter',
    pageCounte: 200,
    genre: 'drama'
}
const book2 = {
    title: 'Shantaram',
    pageCounte: 300,
    genre: 'roman'
};
console.log(book);
console.log(book1);
console.log(book2);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
const books = {
    title: 'Puaro',
    pageCounte: 100,
    genre: 'dedektive',
    autors: {
        name: 'Piter',
        age: 55
    }
}
const books1 = {
    title: 'Potter',
    pageCounte: 200,
    genre: 'drama',
    autors: {
        name: 'Pen',
        age: '60'
    }
}
const books2 = {
    title: 'Shantaram',
    pageCounte: 300,
    genre: 'roman',
    autors: {
        name: 'Marpl',
        age: 80
    }
};
console.log(books);
console.log(books1);
console.log(books2);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
const users = [
    {name: 'Alex', username: 'Alexandro', password: 869},
    {name: 'Flex', username: 'Flexandro', password: 854},
    {name: 'Wlex', username: 'Wlexandro', password: 685},
    {name: 'Klex', username: 'Klexandro', password: 784},
    {name: 'Blex', username: 'Blexandro', password: 111},
    {name: 'Mlex', username: 'Mlexandro', password: 258},
    {name: 'Petro', username: 'Petrovych', password: 111},
    {name: 'Nina', username: 'Nino', password: 376},
    {name: 'Sasha', username: 'Alexandrina', password: 888},
    {name: 'Lesja', username: 'olexandrivna', password: 125}
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);