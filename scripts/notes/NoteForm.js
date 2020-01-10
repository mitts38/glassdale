import { saveNote, editNote, useNotes } from "./NoteDataProvider.js";

const eventHub = document.querySelector("#mainContainer")
const extraButtonTarget = document.querySelector(".extraButtonContainer")
const contentTarget = document.querySelector(".noteFormContainer")
const noteHTML = document.querySelector(".noteContainer")


const NoteFormComponent = () => {

  eventHub.addEventListener("editButtonClicked", event => {
    const noteToBeEdited = event.detail.noteId

    const allNotesArray = useNotes()

    const theFoundNote = allNotesArray.find(
      (currentNoteObject) => {
        return currentNoteObject.id === parseInt(noteToBeEdited, 10)
      }
    )

    document.getElementById("note-id").value = theFoundNote.id
    document.getElementById("note-text").value = theFoundNote.text
    document.getElementById("note-suspect").value = theFoundNote.suspect
  })

  // Handle internal element click
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
      clickEvent.preventDefault()
      // Does the hidden input field have a value?
      const hiddenInputValue = document.querySelector("#note-id").value
      // If so, edit the note with a PUT operation
      if (hiddenInputValue !== "") {
        const editedNote = {
          text: document.querySelector('#note-text').value,
          suspect: document.querySelector('#note-suspect').value,
          date: "Edited " + new Date(Date.now()).toLocaleDateString('en-US'),
          id: parseInt(document.querySelector("#note-id").value, 10)
        }

        editNote(editedNote).then(() => {
          eventHub.dispatchEvent(new CustomEvent("noteHasBeenEdited"))
        })
        document.getElementById("suspiciousNoteForm").reset()
        document.querySelector("#note-id").value = ""
      } else {
        // Else, save the notes with a POST operation

        clickEvent.preventDefault()

        // Make a new object representation of a note
        const newNote = {
          text: document.querySelector('#note-text').value,
          date: new Date(Date.now()).toLocaleDateString('en-US'),
          suspect: document.querySelector('#note-suspect').value,
        }
        // Change API state and application state
        saveNote(newNote).then(() => document.getElementById("suspiciousNoteForm").reset())
          .then(() => {
            //check if notes are showing
            if (noteHTML.innerHTML !== "") {
              const message = new CustomEvent("noteCreated")
              eventHub.dispatchEvent(message)
            }
          })
      }
    }
  })

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {
      const message = new CustomEvent("showNoteButtonClicked")
      eventHub.dispatchEvent(message)
    }
  })

  const render = () => {
    contentTarget.innerHTML = `
            <form id="suspiciousNoteForm">
            <input type="hidden" id="note-id">
            <div class="suspectNoteForm">
            <label for="note-text">Cold Case Note: </label>
            <input type="text" id="note-text" placeholder="Your note here...">
            <label for="note-suspect">Suspect: </label>
            <input type="text" id="note-suspect" placeholder="Suspect here...">
            <button id="saveNote">Save Note</button>
            </form>
            <br>`
    extraButtonTarget.innerHTML = `
            <div class="extraButtons">
            <button id="showNotes">Show Notes</button>
            <button id="hideNotes">Hide Notes</button>
            <button id="witnessStatements">Witness Statements</button>
            <button id="showAllCriminals">Show All Criminals</button>
            </div>`
  }

  render()
}

export default NoteFormComponent