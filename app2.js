//import { Book } from "./app";
const buttonAdder = document.getElementById("book-inserting-button");

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

const myLibrary = [];
function myLibPusher(title, author, booleanRead) {
    myLibrary.push({title:title, author:author, booleanRead: booleanRead})
}

function myLibPusher2(title, author, booleanRead) {
    myLibrary.push(new Book(title, author, booleanRead))
}

myLibPusher2("the hobbit", "jrr tolkien", false);
myLibPusher2("100 años de soledad", "gabriel garcia marquez", true);
myLibPusher2("más allá de tu mente", "alan watts", true);
myLibPusher2("robinson crusoe", "daniel defoe", true)

function    rowsInserter2() {
    //var table = document.getElementById("only-table");
    
    for (let i = 0; i < myLibrary.length; i++) {
        var onlyTable = document.getElementById("only-table");
        var row = onlyTable.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var newBtnEraser = document.createElement('button');
        var btnStatusChanger = document.createElement('button');
        cell1.innerHTML = myLibrary[i].title;
        cell2.innerHTML = myLibrary[i].author;
        //cell3.innerHTML = myLibrary[i].booleanRead;
        cell3.innerHTML = `<p>${myLibrary[i].booleanRead}</p>`
        newBtnEraser.innerHTML = '<span class="material-symbols-outlined">delete</span>';
        newBtnEraser.classList.add('trash');
        btnStatusChanger.innerHTML = '<span class="material-symbols-outlined">import_contacts</span>';
        btnStatusChanger.classList.add('orange');
        cell3.appendChild(newBtnEraser);
        cell3.appendChild(btnStatusChanger);
    }
    
  }

  rowsInserter2()

function newBookInserter() {
    var onlyTable = document.getElementById("only-table");
    var row = onlyTable.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var newBtnEraser = document.createElement('button');
    var btnStatusChanger = document.createElement('button');
    cell1.innerHTML = myLibrary[myLibrary.length-1].title;
    document.getElementById("title").value = '';
    cell2.innerHTML = myLibrary[myLibrary.length-1].author;
    document.getElementById("author").value = '';
    // cell3.innerHTML = myLibrary[myLibrary.length-1].booleanRead;
    cell3.innerHTML = `<p>${myLibrary[myLibrary.length-1].booleanRead}</p>`
    document.getElementById("did-you-read-it").value = ''
    newBtnEraser.innerHTML = '<span class="material-symbols-outlined">delete</span>';
    newBtnEraser.classList.add('trash');
    btnStatusChanger.innerHTML = '<span class="material-symbols-outlined">import_contacts</span>';
    btnStatusChanger.classList.add('orange'); //this lline is not working
    cell3.appendChild(newBtnEraser);
    cell3.appendChild(btnStatusChanger);
    trRowCollection[trRowCollection.length-1].addEventListener("click", () => {
        console.log("new button clicked");
        trRowCollection[trRowCollection.length-1].classList.toggle("true-lies");
        if (myLibrary[myLibrary.length-1].booleanRead) {
            myLibrary[myLibrary.length-1].booleanRead = false;
            trRowCollection[trRowCollection.length-1].parentElement.firstChild.innerText = myLibrary[myLibrary.length-1].booleanRead;
        } else {
            myLibrary[myLibrary.length-1].booleanRead = true;
            trRowCollection[trRowCollection.length-1].parentElement.firstChild.innerText = myLibrary[myLibrary.length-1].booleanRead;
        }
    })
    trashButtons[trashButtons.length-1].addEventListener("click", () => {
        console.log("new trash button clicked");
    })
} 

//console.log(myLibrary)

buttonAdder.addEventListener("click", (e)=> {
    if (document.getElementById("title").value === '' || 
        document.getElementById("author").value === '' ||
        document.getElementById("did-you-read-it").value === '') {
            e.preventDefault();
        } else {
            myLibPusher2(document.getElementById("title").value, document.getElementById("author").value, document.getElementById("did-you-read-it").value);
            console.log(myLibrary);
            e.preventDefault();
            newBookInserter()

        }    
  })

  const trRowCollection = document.getElementsByClassName('orange');
  for (let i = 0; i < trRowCollection.length; i++) {
    trRowCollection[i].addEventListener("click", () => {
        console.log("clicked read")
        trRowCollection[i].classList.toggle("true-lies");
        if (myLibrary[i].booleanRead) {
            myLibrary[i].booleanRead = false;
            trRowCollection[i].parentElement.firstChild.innerText = myLibrary[i].booleanRead;
        } else {
            myLibrary[i].booleanRead = true;
            trRowCollection[i].parentElement.firstChild.innerText = myLibrary[i].booleanRead;
        }
        
    })
    //trRowCollection[i].style.color = "orangered";
  }

  const trashButtons = document.getElementsByClassName('trash');
  for (let i = 0; i < trashButtons.length; i++) {
    trashButtons[i].addEventListener("click", () => {
        console.log("trash clicked");
    })
  }


