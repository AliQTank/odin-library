//import { Book } from "./app";
const buttonAdder = document.getElementById("book-inserting-button");
const button = document.querySelector("button");
const trashButtons = document.getElementsByClassName('trash');
const orangeSelections = document.getElementsByClassName('orange');
const onlyTable = document.getElementById("only-table");
let docToggler = true;
let count = 0;
let objectsAdded = 0;
let objectsErased = 0;


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

Book.prototype.eraser = function() {
    
    if (trashButtons.classList === "trashbutton") {
        this.trashButtons.classList.toggle = "true lies";
    }
} ();

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
myLibPusher2("robinson crusoe", "daniel defoe", true);
myLibPusher2("12 rules for life", "jordan b. peterson", true);
myLibPusher2("crimen y castigo", "fyodor dostoyevsky", true);
myLibPusher2("cant hurt me", "david goggings",  false);

//FUNCTION TO INSERT MYLIBRARY ARRAY INTO TABLE AT FIRST LOG, PREREGISTERED BOOK OBJECTS BY DEFAULT
function    rowsInserter2() {
    //var table = document.getElementById("only-table");
    
    for (let i = 0; i < myLibrary.length; i++) {
        //var onlyTable = document.getElementById("only-table");
        var row = onlyTable.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var newBtnEraser = document.createElement('button');
        var btnStatusChanger = document.createElement('button');
        cell1.innerHTML = myLibrary[i].title;
        cell2.innerHTML = myLibrary[i].author;
        cell3.innerHTML = `<p>${myLibrary[i].booleanRead}</p>`
        newBtnEraser.innerHTML = '<span class="material-symbols-outlined">delete</span>';
        newBtnEraser.classList.add('trash');
        btnStatusChanger.innerHTML = '<span class="material-symbols-outlined">import_contacts</span>';
        btnStatusChanger.classList.add('orange');
        cell3.appendChild(newBtnEraser);
        cell3.appendChild(btnStatusChanger);
    }
    count = myLibrary.length;
    
  }
  rowsInserter2()

  //FUNCTION TO INSERT NEW BOOK OBJECT INTO TABLE AND INSERT 
  function newBookInserter() {
    //var onlyTable = document.getElementById("only-table");
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
    cell3.innerHTML = `<p>${myLibrary[thisIndex].booleanRead}</p>` 
    document.getElementById("did-you-read-it").value = ''
    newBtnEraser.innerHTML = '<span class="material-symbols-outlined">delete</span>';
    newBtnEraser.classList.add('trash');
    btnStatusChanger.innerHTML = '<span class="material-symbols-outlined">import_contacts</span>';
    btnStatusChanger.classList.add('orange');     
    cell3.appendChild(newBtnEraser);
    cell3.appendChild(btnStatusChanger);
    count++, objectsAdded++; //bothFuncs(); //, docToggler = !docToggler? false: true;  
    if (!docToggler) { 
        bothFuncs();
        docToggler = !docToggler;
        bothFuncs()
    } else { 
        docToggler = !docToggler;
        bothFuncs();
        docToggler = !docToggler;
        bothFuncs();
    }
} 

//FUNCTION TO ADD EVENT LISTENER FOR TRASH AND ERASER BUTTON(TO BE MADE)

//console.log(myLibrary)

buttonAdder.addEventListener("click", (e)=> {
    e.preventDefault()
    if (document.getElementById("title").value === '' || 
        document.getElementById("author").value === '' ||
        document.getElementById("did-you-read-it").value === '') {
    } else {
        myLibPusher2(document.getElementById("title").value, 
        document.getElementById("author").value, 
        document.getElementById("did-you-read-it").value==1);
        console.log(myLibrary);
        newBookInserter();        
    }    
  })

  //FUNCTION TO TOGGLE COLOR TO READ BUTTON AND TOGGLE TRUE/FALSE INTO ROW AND MYLIBRARY ORIGINAL COLLECTION

  function arraytoChangeFalseTrue() {
    const arrayOrange = Array.from(orangeSelections)
    arrayOrange.forEach(element => {
        if (!docToggler) {
            element.removeEventListener("mouseover", buttonTargetOrange)
            element.removeEventListener("click", trueSwitcher)
        
        } else {
            element.addEventListener("mouseover", buttonTargetOrange)
            element.addEventListener("click", trueSwitcher)       
        }
        // element.addEventListener("click", function falser()  {
        //     const nameOfBookInList = element.parentElement.parentElement.cells[0].innerHTML;
        //     const myBooleanBook = myLibrary.map(obj => obj.title).indexOf(nameOfBookInList);            
        //     element.classList.toggle("true-lies")
        //     console.log(`clicked ${nameOfBookInList}`, myLibrary[myBooleanBook].booleanRead, myBooleanBook)
        //     // console.log(myLibrary[myBooleanBook].booleanRead)
        //     // console.log(myBooleanBook)
        //     if (myLibrary[myBooleanBook].booleanRead) {
        //         myLibrary[myBooleanBook].booleanRead = false
        //         orangeSelections[myBooleanBook].parentElement.firstChild.innerText = myLibrary[myBooleanBook].booleanRead
        //     } else {
        //         myLibrary[myBooleanBook].booleanRead = true
        //         orangeSelections[myBooleanBook].parentElement.firstChild.innerText = myLibrary[myBooleanBook].booleanRead
        //     }
        // }) 
    });
  }  


  // FUNCTION INTENDED TO REPLACE FALSER
  function trueSwitcher(e) {
    const item = e.target;
    if (item.classList[0] === 'orange') {
        const nameOfBookInList = item.parentElement.parentElement.cells[0].innerHTML;
        const myBooleanBook = myLibrary.map(obj => obj.title).indexOf(nameOfBookInList);
        item.classList.toggle("true-lies");
        if (myLibrary[myBooleanBook].booleanRead) {
            myLibrary[myBooleanBook].booleanRead = false;
            orangeSelections[myBooleanBook].parentElement.firstChild.innerText = myLibrary[myBooleanBook].booleanRead
        } else {
            myLibrary[myBooleanBook].booleanRead = true
            orangeSelections[myBooleanBook].parentElement.firstChild.innerText = myLibrary[myBooleanBook].booleanRead
        }
    }
  }

  //arraytoChangeFalseTrue()

  function arrayConvertToerase() {
    const arrayLib = Array.from(trashButtons);    
    arrayLib.forEach(element => {
        if (!docToggler) {
            element.removeEventListener("mouseover", buttonTarget);
            element.removeEventListener("click", trashToggler);
            
        } else {
            element.addEventListener("click", trashToggler);                  
            element.addEventListener("mouseover", buttonTarget);  
        }
        
        //element.addEventListener("click", listenerToggler)
    });        
}

function trashToggler(e) {
    const item = e.target; 
    if(item.classList[0] === 'trash' ) {
        const nameOfBookInList = item.parentElement.parentElement.cells[0].innerHTML;
        const indexOfLibrary = myLibrary.map(obj => obj.title).indexOf(nameOfBookInList);
        myLibrary.splice(indexOfLibrary, 1);
        trashButtons[indexOfLibrary].parentElement.parentElement.remove();
        count--, objectsErased++, docToggler = true ? false : false;        
    }    
}

function buttonTarget(e){
    const item = e.target;
    if (item.classList[0] === 'trash'){       
    } else {console.log(e.target.parentElement);}    
}    

function buttonTargetOrange(e) {
    const item = e.target;
    if(item.classList[0] === 'orange'){ 
    } else {console.log(e.target.parentElement);}
}

function bothFuncs() {
    if(count === myLibrary.length) {
        arraytoChangeFalseTrue();
        arrayConvertToerase();        
    }    
}

//arrayConvertToerase()
//josesmith283522 backup
//josesmiththeone