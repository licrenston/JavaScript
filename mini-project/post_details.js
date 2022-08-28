// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(posts => {

        let btn = document.createElement('button');
        btn.innerText = 'Comment of current post';
        let btnDiv = document.createElement('div');
        btnDiv.classList.add('comment-baton');
        btnDiv.append(btn);
        let main = document.createElement('div');
        main.classList.add('main');
        let mainCommentDiv = document.createElement('div');
        mainCommentDiv.classList.add('comment')

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
                        let mainCommentDivItem = document.createElement('div');
                        mainCommentDivItem.append(post.body);
                        mainCommentDiv.append(mainCommentDivItem);
                    }
                });
        };
        document.body.append(main, btnDiv, mainCommentDiv);
    })