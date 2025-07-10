let bookRef = document.getElementById('book_one');
let commentInputRef = document.getElementsByClassName('input-comment-value');
let myBtn = document.getElementsByClassName('btn');

function init() {
    getFromLocalStorage();
    bookTemplate();
}

function bookTemplate() {
    bookRef.innerHTML = '';
    for (let i = 0; i < books.length; i++) {
        bookRef.innerHTML += renderBooks(i);
    }
}

function renderBooks(i) {
    return `<div class="books-style">
        <h2>${books[i].name}</h2>
        <img class="book-img" src="../assets/img/book.png" alt="">
        <div class="price-likes">
            <p class="price">${books[i].price.toFixed(2)} €</p>
            <div class="likes">
                ${showIfLiked(i)}
                <p class="price">${books[i].likes}</p>
            </div>
        </div>
        <div class="book-infos">
            <div class="info-keys">
                <p>Autor:</p>
                <p>Erscheinungsjahr:</p>
                <p>Genre:</p>
            </div>
            <div class="info-value">
                <p>${books[i].author}</p>
                <p>${books[i].publishedYear}</p>
                <p>${books[i].genre}</p>
            </div>
        </div>
        <div class="comments">
            <h3>Kommentare:</h3>
            <div class="send-comment">
                <input class="input-comment-value" type="text" placeholder="Kommentar">
                <button class="btn" onclick="sendComment(${i})">Senden</button>
            </div>
            <hr>
            <div class="comment-section">${showComments(i)}</div>
        </div>
        </div>
    `;
}

function showComments(i) {
    if (books[i].comments.length === 0) {
        return `<p><i>Noch keine Kommentare vorhanden</i></p>`
    } else {
        let html = '';
        for (let indexComments = 0; indexComments < books[i].comments.length; indexComments++) {
            html += `<div class="comments-user-comment"><p><b>${books[i].comments[indexComments].name}:</b></p>
                <p>${books[i].comments[indexComments].comment}</p></div>`
        }
        return html;
    }
}

function showIfLiked(i) {
    if (books[i].liked == true) {
        return `<img onclick="changeLiked(${i})" src="../assets/icons/heart-solid.svg" alt="">`
    } else {
        return `<img onclick="changeLiked(${i})" src="../assets/icons/heart-regular.svg" alt="">`
    }
}

function changeLiked(i) {
    if (books[i].liked == true) {
        books[i].liked = false;
        books[i].likes = books[i].likes - 1;
        saveToLocalStorage();
        bookTemplate();
    } else {
        books[i].liked = true;
        books[i].likes = books[i].likes + 1;
        saveToLocalStorage();
        bookTemplate();
    }

}

function sendComment(i) {
    let commentInput = commentInputRef[i].value;
    if (commentInput != "") {
        let commentObj = { name: "Jule", comment: commentInput };
        books[i].comments.push(commentObj);
        bookTemplate();
        saveToLocalStorage();
    }
}

function saveToLocalStorage() {
    for (let i = 0; i < books.length; i++) {
        localStorage.setItem(`comments${i + 1}`, JSON.stringify(books[i].comments));
        localStorage.setItem(`liked${i + 1}`, JSON.stringify(books[i].liked));
        localStorage.setItem(`likes${i + 1}`, JSON.stringify(books[i].likes));
    }
}

function getFromLocalStorage() {
    for (let i = 0; i < books.length; i++) {
        let comments = JSON.parse(localStorage.getItem(`comments${i + 1}`));
        let liked = JSON.parse(localStorage.getItem(`liked${i + 1}`));
        let likes = JSON.parse(localStorage.getItem(`likes${i + 1}`));

        if (comments !== null) {
            books[i].comments = comments;
        }
        if (liked !== null) {
            books[i].liked = liked;
        }
        if (likes !== null) {
            books[i].likes = likes;
        }
    }
}