// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href);
let id = url.searchParams.get('id');

let btn = document.createElement('button');
btn.innerText = 'Comment of current post';

let DivBtn = document.createElement('div');
DivBtn.classList.add('comment-baton');
DivBtn.append(btn);

let main = document.createElement('div');
main.classList.add('main');

let DivMainComent = document.createElement('div');
DivMainComent.classList.add('comment')

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(posts => {

        for (const value in posts) {

            let child = document.createElement('div');
            child.append(`${value} : ${posts[value]}`);
            main.append(child);
        }

        btn.onclick = function (){
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then(response => response.json())
                .then(posts => {

                    for (const post of posts) {
                        let DivMainComentPosts = document.createElement('div');
                        DivMainComentPosts.append(post.body);
                        DivMainComent.append(DivMainComentPosts);
                    }
                });
        };
        document.body.append(main, DivBtn, DivMainComent);
    })