const table = document.getElementsByTagName("table");
const onlyTable = document.getElementById("only-table");
const h2 = document.getElementById("header-number-2");
var trCreator = document.createElement("tr");
var tCellCreator = document.createElement("td");
var tCellCreatorInsert = trCreator.insertCell(-1);


let myLibrary = []

function Book(title, author, booleanRead) {
    this.title = title,
    this.author = author,
    this.booleanRead = booleanRead    
}

Book.prototype.info = function() {
    if (!this.booleanRead) {
        return `${this.title} by ${this.author}, not read yet`
    } else {
        return `${this.title} by ${this.author}, already read`
    }
}

Book.prototype.sayHello = function() {
    return `Hi!!, i am ${this.title} and i am a good book`
}

const theHobbit = new Book("the hobbit", "j.r.r. tolkien", false)
        console.log(theHobbit.info())
const cienSoledad = new Book("100 años de soledad", "gabriel garcia marquez", true)
const masAllaDeTuMente = new Book("mas alla de tu mente", "alan watts", true)
const robinsonCrusoe = new Book("robinson crusoe", "daniel defoe", true) 


function addBookToLibrary(objectName) {
    return myLibrary.push(objectName)
}

addBookToLibrary(theHobbit)
addBookToLibrary(cienSoledad)
addBookToLibrary(masAllaDeTuMente)
addBookToLibrary(robinsonCrusoe)

function libraryLooper() {
    let allBooksIntoP = ""
    for (let i = 0; i < myLibrary.length; i++) {
    allBooksIntoP += myLibrary[i].title + "<br>";
    }
    document.getElementById("demo").innerHTML = allBooksIntoP;
}

libraryLooper()

/*************/
/*************/

h2.style.color = "blue";
onlyTable.style.color = "red"
onlyTable.style.backgroundColor = "yellow"

let allBooksIntoTable = ""

/********************/

function addBookToTable() {
    tCellCreator.innerText = "hello world";
    trCreator.appendChild(tCellCreator);
    onlyTable.appendChild(trCreator);
}

function    rowsInserter() {
    //var table = document.getElementById("only-table");
    var row = onlyTable.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = "NEW CELL3";
  }

  for (let i = 0; i < myLibrary.length; i++) {

    console.log(myLibrary[i]);
  }

  function    rowsInserter2() {
    //var table = document.getElementById("only-table");
    
    for (let i = 0; i < myLibrary.length; i++) {
        var row = onlyTable.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = myLibrary[i].title;
        cell2.innerHTML = myLibrary[i].author;
        cell3.innerHTML = myLibrary[i].booleanRead;
    }
    
  }