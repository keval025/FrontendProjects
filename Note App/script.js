let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
  const container = document.getElementById("notesContainer");
  container.innerHTML = "";

  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";

    div.innerHTML = `
      ${note}
      <span class="delete-btn" onclick="deleteNote(${index})">✖</span>
    `;

    container.appendChild(div);
  });
}

function addNote() {
  const input = document.getElementById("noteInput");
  const noteText = input.value.trim();

  if (noteText === "") {
    alert("Please write something!");
    return;
  }

  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));

  input.value = "";
  displayNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

displayNotes();
