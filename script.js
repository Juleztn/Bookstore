let bookRef = document.getElementById('book_one');

function init() {
    bookTemplate();
}

function bookTemplate() {
    for (let i = 0; i < 3; i++) {
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
                <input type="text"> 
                <button>Senden</button>
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
        return `<img src="../assets/icons/heart-solid.svg" alt="">`
    } else {
        return `<img src="../assets/icons/heart-regular.svg" alt="">`
    }
}

console.table(books[0]);
console.table(books[1]);
console.table(books[2]);
