let picture = document.getElementById("picture");
let newComment = document.querySelector('.chatArea__comment')

let ava = document.getElementById('avatar');

function sendMessage() {
    let author = document.getElementById('name').value;
    author = author.toLowerCase();
    author = author.replace(/(^|\s)\S/g, function (a) { return a.toUpperCase() });
    let text = document.getElementById('comment').value;
    text = text.replace(/viagra/gi, "***");
    text = text.replace(/xxx/gi, "***");
    picture.src = document.getElementById('avatar').value;
    newComment.innerHTML += author + ": " + text + '<br>';

    //let authorImage = document.createElement('img');
    //authorImage.setAttribute('src', ava.value);
    //let picPlace = newComment.parentNode;
    //picPlace.insertBefore(authorImage, newComment.nextSibling);
}