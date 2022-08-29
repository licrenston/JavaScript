//В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

let main = document.createElement('div');
main.classList.add('main');
document.body.append(main);

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {

        for (const user of users) {

            let a = document.createElement('a');
            a.href = `user_details.html?id=${user.id}`;
            a.innerText = "Informations";

            let child = document.createElement('div');
            let b = document.createElement('p');
            child.classList.add('main_2');
            b.append(`${user.id}. ${user.name}`)
            child.append(b, a);
            main.append(child);
            }
    });











// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then(users => {
//         for (const user of users) {
//             let div = document.createElement('div');
//             div.innerText = `${user.id} ${user.name}`;
//             let a = document.createElement('a');
//             a.href = `posts.html?id=${user.id}`;
//             a.innerText = 'posts of user';
//             div.appendChild(a);
//             document.body.appendChild(div);
//         }
// });



// let url = new URL(location.href);
// console.log(url);
// let id = url.searchParams.get('id');
// console.log(id);
//
// fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
//     .then(response => response.json())
//     .then(posts => {
//         let ul = document.createElement('ul');
//         for (const post of posts) {
//             let li = document.createElement('li');
//             li.innerText = post.title;
//             ul.appendChild(li);
//         }
//         document.body.appendChild(ul);
//     });

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then(users => {
//         for (const user of users) {
//             let div = document.createElement('div');
//             div.innerText = `${user.id} ${user.name}`;
//             let a = document.createElement('a');
//             a.href = `posts.html?data=${JSON.stringify(user)}`;
//             a.innerText = 'posts of user';
//             div.appendChild(a);
//             document.body.appendChild(div);
//         }
// });