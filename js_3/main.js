// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
let x = 1;
console.log(x);
if (x!==0) {
    console.log('True');
} else {
    console.log('False');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = prompt('введіть цифри тільки від 0 до 59');
if (time >= 0 && time <= 15) {
    console.log('1-ша чверть години')
} else if (time > 15 && time <= 30) {
    console.log('2-га чверть години')
} else if (time > 30 && time <= 45) {
    console.log('3-тя чверть години')
} else if (time > 45 && time <= 59) {
    console.log('4-та чверть години')
}
else {
    console.log(time = 'Тільки цифри від 0 до 59 !!!')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
let day = prompt('число від 1 до 31');
if (day >=1 && day <=10) {
    console.log('перша декада')
} else if (day >=11 && day <= 20) {
    console.log('друга декада')
} else if (day >=21 && day <= 31) {
    console.log('третя декада')
} else {
    console.log('erorr')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
let week = prompt('вводить порядковий номер дня тижня');
    switch (week) {
        case '1':
            console.log('Monday-work');
            break;
        case '2':
            console.log('Tuesday-work');
            break;
        case '3':
            console.log('Wednesday-work');
            break;
        case '4':
            console.log('Thursday-work');
            break;
        case '5':
            console.log('Friday-work');
            break;
        case '6':
            console.log('englesh');
            break;
        case '7':
            console.log('free-day');
            break;
        default:
            console.log('??????????')
    }
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
    let number = 5;
    let number1 = 7;
    if (number > number1) {
        console.log('number')
    } else if (number1 > number){
        console.log('number1')
    } else if (number === number1) {
        console.log('equviv')
    }


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
    let xxx = Nan || 'default';
    console.log(xxx);
    