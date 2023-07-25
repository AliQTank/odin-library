let myLibrary = []

function Book(title, author, booleanRead) {
    this.title = title,
    this.author = author,
    this.booleanRead = booleanRead,
    this.info = function() {
        if (!booleanRead) {
            return `${title} by ${author}, pages, not read yet`
        } else {
            return `${title} by ${author}, pages, already read`
        }                
    }
}

Book.prototype.sayHello = function() {
    return `Hi!!, i am ${this.title} and i am a good book`
}

const theHobbit = new Book("the hobbit", "j.r.r. tolkien", false)
        console.log(theHobbit.info())
const cienSoledad = new Book("100 años de soledad", "gabriel garcia marquez", true)
const masHayaDeTuMente = new Book("mas haya de tu mente", "alan watts", true)
const robinsonCrusoe = new Book("robinson crusoe", "daniel defoe", true) 


function addBookToLibrary(objectName) {
    return myLibrary.push(objectName)
}

addBookToLibrary(theHobbit)
addBookToLibrary(cienSoledad)
addBookToLibrary(masHayaDeTuMente)
addBookToLibrary(robinsonCrusoe)

function libraryLooper() {}

/*********** */
let allBooks = ""
for (let i = 0; i < myLibrary.length; i++) {
    allBooks += myLibrary[i].title + "<br>";
}

document.getElementById("demo").innerHTML = allBooks;