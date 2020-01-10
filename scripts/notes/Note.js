export const noteComponent = (note) => {
    return `
    <div class="noteCard">
    <h4 class="noteHeader">${note.suspect}</h4>
    <p class="noteText">${note.text}</p>
    <p class="noteDate">${note.date}</p>
    <button id="editNote--${note.id}">Edit</button>
    <button id="deleteNote--${note.id}">Delete</button>
    </div>`
  }