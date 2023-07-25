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


function addBookToLibrary(objectName) {
    return myLibrary.push(objectName)
}

addBookToLibrary(theHobbit)

function libraryLooper() {}