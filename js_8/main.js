// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
const users = [];
users.push(new User(1, 'Desdamona', 'Underdog', 'dog@gmail.com', 123));
users.push(new User(2, 'Eleanor', 'Turtle Taxi', 'Taxi@gmail.com', 456));
users.push(new User(3, 'Terminator', 'Waggy', 'ggy@gmail.com', 789));
users.push(new User(4, 'Indestructible', 'Guardian', 'dian@gmail.com', 321));
users.push(new User(5, 'Brum', 'Spit Fires', 'Fires@gmail.com', 654));
users.push(new User(7, 'Bumblebee', 'Jitter Bug', 'Bug@gmail.com', 987));
users.push(new User(6, 'Gina', 'Wired', 'red@gmail.com', 147));
users.push(new User(8, 'Bessie', 'Road Sniper', 'per@gmail.com', 258));
users.push(new User(9, 'Battle Shell', 'Lucky', 'cky@gmail.com', 369));
users.push(new User(10, 'The Beast', 'Robocop', 'cop@gmail.com', 951));
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filter = users.filter(value => value.id%2 === 0);
console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sort = users.sort((id1, id2) => id1 - id2);
console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Clients {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
const clients = [];
clients.push(new Clients(1, 'Desdamona', 'Underdog', 'dog@gmail.com', 123, ['hotdog', 'burger']));
clients.push(new Clients(2, 'Eleanor', 'Turtle Taxi', 'Taxi@gmail.com', 456, ['chiken', 'fluri']));
clients.push(new Clients(3, 'Terminator', 'Waggy', 'ggy@gmail.com', 789, ['beer', 'cider']));
clients.push(new Clients(4, 'Indestructible', 'Guardian', 'dian@gmail.com', 321, ['brandy, whiskey']));
clients.push(new Clients(5, 'Brum', 'Spit Fires', 'Fires@gmail.com', 654, ['hotdog', 'burger']));
clients.push(new Clients(7, 'Bumblebee', 'Jitter Bug', 'Bug@gmail.com', 987, ['chiken', 'fluri']));
clients.push(new Clients(6, 'Gina', 'Wired', 'red@gmail.com', 147, ['beer', 'cider']));
clients.push(new Clients(8, 'Bessie', 'Road Sniper', 'per@gmail.com', 258, ['brandy, whiskey']));
clients.push(new Clients(9, 'Battle Shell', 'Lucky', 'cky@gmail.com', 369, ['chips', 'snek']));
clients.push(new Clients(10, 'The Beast', 'Robocop', 'cop@gmail.com', 951,['semki', 'potash']));
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClients = clients.sort((client1, client2) => client1.order.length - client2.order.length);
console.log(sortClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        console.log(`Модель - ${this.model}. Виробник - ${this.producer}. Рік випуску - ${this.year}. Максимальна швидкість - ${this.maxSpeed}. Об'єм - ${this.volume}`);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };
    this.changeYear = function (newYear) {
        this.year = newYear;
    };
    this.addDriver = function (driver) {
        this.driver = driver;

    }
}
const car = new Car('Billy Bob', 'Ferrari', 2023, 600, 8.0);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2025);
car.addDriver({name: 'Macho', age: 30});
console.log(car);
console.log('*****************************')

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class ClassCar {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }
    drive  () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);

    };
    info () {
        console.log(`Модель - ${this.model}. Виробник - ${this.producer}. Рік випуску - ${this.year}. Максимальна швидкість - ${this.maxSpeed}. Об'єм - ${this.volume}`);
    };
    increaseMaxSpeed  (newSpeed) {
        console.log(this.maxSpeed += newSpeed);
    };
    changeYear  (newYear) {
        console.log(this.year = newYear);
    };
    addDriver (driver) {
        this.driver = driver;

    }
}
let firstCar = new ClassCar('Billy Bob', 'Ferrari', 2023, 600, 8.0)
console.log(firstCar);
firstCar.drive();
firstCar.info();
firstCar.increaseMaxSpeed(100);
firstCar.changeYear(2025);
firstCar.addDriver({name: 'Macho', age: 30});
console.log(firstCar);

// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
function Cinderella(name,age,footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let cinderellas = [];
cinderellas.push(new Cinderella('Rocky', 40,40));
cinderellas.push(new Cinderella('Bono', 45,41));
cinderellas.push(new Cinderella('Cooper', 50,42));
cinderellas.push(new Cinderella('John', 60,43));
cinderellas.push(new Cinderella('Bruce', 65,44));
cinderellas.push(new Cinderella('Enzo', 70,45));
cinderellas.push(new Cinderella('Popeye', 75,39));
cinderellas.push(new Cinderella('Drake', 80,44));
cinderellas.push(new Cinderella('Charlie', 85,47));
cinderellas.push(new Cinderella('Royce', 90,38));
console.log(cinderellas);

// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
class Princes {
    constructor(name,age,shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince = new Princes('Nasty Romeo Linus Buster', 77, 45);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoe) {
        console.log(cinderella);
    }
}
console.log('*********************');

// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let find = cinderellas.find(value => value.footSize === prince.shoe);
console.log(find);