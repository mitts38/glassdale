import { useNotes, getNotes, deleteNote } from "./NoteDataProvider.js";
import { noteComponent } from "./Note.js";


const eventHub = document.querySelector("#mainContainer")
const noteHTML = document.querySelector(".noteContainer")
const editNoteHTML = document.querySelector(".editNoteContainer")

const NoteListComponent = () => {

  eventHub.addEventListener("noteHasBeenEdited", event => {
    render(useNotes())
  })

  const rerenderNotes = () => {
    getNotes().then(
      () => {
        render(useNotes())
      }
    )
  }
  eventHub.addEventListener("noteCreated", event => {
    rerenderNotes()
  })

  eventHub.addEventListener("showNoteButtonClicked", event => {
    rerenderNotes()
  })

  eventHub.addEventListener("click", e => {
    if (e.target.id === "hideNotes") {
      noteHTML.innerHTML = ""
    }
  })

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("editNote--")) {
      const [prefix, id] = clickEvent.target.id.split("--")

      const editEvent = new CustomEvent("editButtonClicked", {
        detail: {
          noteId: id
        }
      })

      eventHub.dispatchEvent(editEvent)
    }

    if (clickEvent.target.id.startsWith("deleteNote--")) {
      const [prefix, id] = clickEvent.target.id.split("--")
      /*
          Invoke the function that performs the delete operation.
          Once the operation is complete you should THEN invoke
          useNotes() and render the note list again.
      */
      deleteNote(id).then(() => render(useNotes()))
    }
  })

  const render = noteCollection => {
    noteHTML.innerHTML = `
      ${noteCollection.map(
      (note) => {
        return noteComponent(note)
      }
    ).join("")}`
  }
}

export default NoteListComponent