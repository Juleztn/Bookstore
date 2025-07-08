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
            <p>${books[i].price}</p>
            <div class="likes">
                <img class="heart-img" src="../assets/icons/heart-solid.svg" alt="">
                <p>${books[i].likes}</p>
            </div>
        </div>
        <div class="book-infos">
            <div class="infos"><p>Autor:</p>${books[i].author}</div>
            <div class="infos"><p>Erscheinungsjahr:</p>${books[i].publishedYear}</div>
            <div class="infos"><p>Genre:</p>${books[i].genre}</div>
        </div>
        <div>
            <h3>Kommentare:</h3>
            <div>${showComments(i)}</div>
        </div>
        </div>
    `;
}

function showComments(i) {
    if (books[i].comments.length === 0) {
        return `<p>Noch keine Kommentare</p>`
    } else {
        for (let indexComments = 0; indexComments < books[i].comments.length; indexComments++) {
            return `<p>${books[i].comments[indexComments].name}</p>
                <p>${books[i].comments[indexComments].comment}</p>`
            }
        
    }
}



console.table(books[2]);
