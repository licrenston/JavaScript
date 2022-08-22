// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length, str2.length, str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str4 = 'hello world';
let str5 = 'lorem ipsum';
let str6 = 'javascript is cool';
console.log(str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str7 = 'hello world';
let str8 = 'lorem ipsum';
let str9 = 'javascript is cool';
console.log(str1.toLowerCase(), str2.toLowerCase(), str3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let str = ' dirty string   ';
let s = str.trim();
console.log(s);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
let str11 = 'Ревуть воли як ясла повні';
const stringToArray = (str) =>  str.split(' ');
console.log(stringToArray(str11));

//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let array = [10,8,-7,55,987,-1011,0,1050,0];
let strings = array.map(value => value + '');
console.log(strings);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
let nums = [11,21,3];
const sortNums = (direction, arr) => {
    if (direction === 'ascending') {
        arr.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        arr.sort((a, b) => b - a);
    }
    return arr;
}
console.log(sortNums('ascending', nums));
console.log(sortNums('descending', nums));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter);

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
let deckOfCards = [
    {
        cardSvit: 'heart',
        value: 'king',
        color: 'black'
    },
    {
        cardSvit: 'diamond',
        value: '6',
        color: 'red'
    },
    {
        cardSvit: 'spade',
        value: 'ace',
        color: 'black'
    },
    {
        cardSvit: null,
        value: 'Joker',
        color: 'black'
    },
    {
        cardSvit: 'clubs',
        value: 'ace',
        color: 'black'
    },
    {
        cardSvit: null,
        value: 'Joker',
        color: 'red'
    },
    {
        cardSvit: 'spade',
        value: 'jack',
        color: 'black'
    },
    {
        cardSvit: 'clubs',
        value: 10,
        color: 'red'
    },
    {
        cardSvit: null,
        value: 6,
        color: 'black'
    },
    {
        cardSvit: 'diamond',
        value: 'Joker',
        color: 'black'
    },
    {
        cardSvit: null,
        value: 'queen',
        color: 'black'
    },
]
// let find = deckOfCards.find(value => value.cardSvit === 'spade' && value.value === 'ace');
// console.log(find);
// let filter1 = deckOfCards.filter(value => value.value === 6);
// console.log(filter1);
// let color = deckOfCards.filter(value => value.color === 'red');
// console.log(color);
// // - всі трефи від 9 та більше
// let filter2 = deckOfCards.filter(value => value.cardSvit === "spade" && value.value > 8 || typeof value.value === "string" && value.cardSvit === "spade" || value.value === "Joker" && value.color === "black");
// console.log(filter2);
// //
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduce = deckOfCards.reduce((accum, card) => {
    if (card.cardSvit === 'spade') {
        accum.spades.push(card);
    }else if (card.cardSvit === 'diamond') {
        accum.diamonds.push(card);
    }else if (card.cardSvit === 'heart') {
        accum.hearts.push(card)
    }else if (card.cardSvit === 'clubs') {
        accum.clubs.push(card);
    } else {
        accum.joker.push(card);
    }
    return accum;
    },{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[],
    joker:[]
    }
    );
console.log(reduce);