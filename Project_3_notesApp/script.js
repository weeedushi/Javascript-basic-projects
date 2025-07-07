const notesContainer = document.querySelector(".notes_container");
const createBtn = document.querySelector(".btn")

function showNotes(){
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        notesContainer.innerHTML = savedNotes;
    } else {
        notesContainer.innerHTML = ""; // Ensure it's clean
    }
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

let notes= document.querySelectorAll(".input-box")

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className="input-box"
    inputBox.setAttribute("contenteditable", true);
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName=== "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="p"){
        notes =document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
