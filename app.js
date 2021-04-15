showNotes();
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', (e) => {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notes = [];
    } else {
        notes = JSON.parse(notes);
    }
    notes.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notes));
    addTxt.value = "";
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notes = [];
    } else {
        notes = JSON.parse(notes);
    }
    let html = "";
    notes.forEach(function(element, index) {
        html += `
        <div class="my-2 mx-2 noteCard card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note: ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary" id="addBtn">Delete</button>
                </div>
            </div>
        `;
    });
    let notesElm = document.getElementById('notes');
    if (notes.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = "Nothing to show right now! Add notes above.";
    }
}

function deleteNote(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notes = [];
    } else {
        notes = JSON.parse(notes);
    }
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}
const searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener('input', () => {
    let inputVal = searchTxt.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = 'block'
        } else {
            element.style.display = 'none'
        }
    })
})