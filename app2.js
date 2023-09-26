//import { Book } from "./app";
const buttonAdder = document.getElementById("book-inserting-button");
const trashButtons = document.getElementsByClassName('trash');

//FUNCTION TO CREATE BOOK OBJECT
function Book(title, author, booleanRead) {
    this.title = title,
    this.author = author,
    this.booleanRead = booleanRead    
}

//PROTOTYPE TO ADD METHOD TO BOOK OBJECT
Book.prototype.info = function() {
    if (!this.booleanRead) {
        return `${this.title} by ${this.author}, not read yet`
    } else {
        return `${this.title} by ${this.author}, already read`
    }
}

//PROTOTYPE TO ADD METHOD TO BOOK OBJECT
Book.prototype.sayHello = function() {
    return `Hi!!, i am ${this.title} and i am a good book`
}

//ARRAY MYLIBRARY
const myLibrary = [];

//FUNCTION TO ADD BOOK OBJECT TO ARRAY MYLIBRARY
function myLibPusher2(title, author, booleanRead) {
    myLibrary.push(new Book(title, author, booleanRead))
}

//BOOK OBJECTS ADDED TO MYLIBRARY ARRAY
myLibPusher2("the hobbit", "jrr tolkien", false);
myLibPusher2("100 años de soledad", "gabriel garcia marquez", true);
myLibPusher2("más allá de tu mente", "alan watts", true);
myLibPusher2("robinson crusoe", "daniel defoe", true)

//FUNCTION TO INSERT MYLIBRARY ARRAY INTO TABLE AT FIRST LOG, PREREGISTERED BOOK OBJECTS BY DEFAULT
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

  //FUNCTION TO INSERT NEW BOOK OBJECT INTO TABLE AND INSERT 
  rowsInserter2()

function newBookInserter() {
    var onlyTable = document.getElementById("only-table");
    var row = onlyTable.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var newBtnEraser = document.createElement('button');
    var btnStatusChanger = document.createElement('button');
    var thisIndex = myLibrary.length - 1;
    cell1.innerHTML = myLibrary[thisIndex].title;
    document.getElementById("title").value = '';
    cell2.innerHTML = myLibrary[thisIndex].author;
    document.getElementById("author").value = '';
    // cell3.innerHTML = myLibrary[thisIndex].booleanRead;
    cell3.innerHTML = `<p>${myLibrary[thisIndex].booleanRead}</p>` 
    document.getElementById("did-you-read-it").value = ''
    newBtnEraser.innerHTML = '<span class="material-symbols-outlined">delete</span>';
    newBtnEraser.classList.add('trash');
    btnStatusChanger.innerHTML = '<span class="material-symbols-outlined">import_contacts</span>';
    btnStatusChanger.classList.add('orange'); 
    cell3.appendChild(newBtnEraser);
    cell3.appendChild(btnStatusChanger);
    trRowCollection[thisIndex].addEventListener("click", () => {
        console.log("new button clicked");
        trRowCollection[thisIndex].classList.toggle("true-lies");
        if (myLibrary[thisIndex].booleanRead) {
            myLibrary[thisIndex].booleanRead = false;
            trRowCollection[thisIndex].parentElement.firstChild.innerText = myLibrary[thisIndex].booleanRead;
        } else {
            myLibrary[thisIndex].booleanRead = true;
            trRowCollection[thisIndex].parentElement.firstChild.innerText = myLibrary[thisIndex].booleanRead;
        }
    })
    trashButtons[trashButtons.length-1].addEventListener("click", () => {
        let nameOfBookInList = trRowCollection[thisIndex].parentElement.parentElement.cells[0].innerHTML;
        const indexOfLibrary = myLibrary.map(obj => obj.title).indexOf(nameOfBookInList);
        console.log("new trash button clicked");
        //console.log(trRowCollection[thisIndex].parentElement.parentElement.cells[0].innerHTML);
        //console.log(trRowCollection[thisIndex].parentElement);
        console.log(indexOfLibrary);
        myLibrary.splice(indexOfLibrary, 1);
        console.log(myLibrary);
    })
} 

//FUNCTION TO ADD EVENT LISTENER FOR TRASH AND ERASER BUTTON(TO BE MADE)

//console.log(myLibrary)

buttonAdder.addEventListener("click", (e)=> {
    if (document.getElementById("title").value === '' || 
        document.getElementById("author").value === '' ||
        document.getElementById("did-you-read-it").value === '') {
            e.preventDefault();
        } else {
            myLibPusher2(document.getElementById("title").value, 
            document.getElementById("author").value, 
            document.getElementById("did-you-read-it").value==1);
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

  // ALGROTM TO ADD EVENT TO TRASH BUTTON
//   for (let i = 0; i < trashButtons.length; i++) {
//     trashButtons[i].addEventListener("click", () => {
//         let nameOfBookInList = trRowCollection[i].parentElement.parentElement.cells[0].innerHTML 
//         const indexOfLibrary = myLibrary.map(obj => obj.title).indexOf(nameOfBookInList);
//         console.log(`trash clicked`);
//         console.log(indexOfLibrary);
//         console.log(nameOfBookInList);
//         myLibrary.splice(indexOfLibrary, 1);
//         console.log(myLibrary);
//         //trRowCollection[i].remove()
//         //trRowCollection[i].parentElement.remove()
//         trRowCollection[i].parentElement.parentElement.remove()
//         //trRowCollection[indexOfLibrary].parentElement.parentElement.remove()
//         for (let j = 0; j <= trRowCollection.length - 1; j++) {
//             if (nameOfBookInList === trRowCollection[j].parentElement.parentElement.cells[0].innerHTML) {
//                 trRowCollection[j].parentElement.parentElement.remove()            
//             }
//         }
        
//     })
//   }

  for (let i = 0; i < trashButtons.length; i++) {
    trashButtons[i].addEventListener("click", () => {
        let nameOfBookInList = trRowCollection[i].parentElement.parentElement.cells[0].innerHTML
        let indexOfLibrary = myLibrary.map(obj => obj.title).indexOf(nameOfBookInList)
        console.log(`trash number ${indexOfLibrary} clicked, book named ${nameOfBookInList}`)
        myLibrary.splice(indexOfLibrary, 1)
        console.log(myLibrary)
        trRowCollection[i].parentElement.parentElement.remove()
    })
  }




  //trRowCollection[3].parentElement.parentElement.children[0].innerHTML

