const eventHub = document.querySelector("#mainContainer")

export const CriminalComponent = (criminal) => {
  console.log("*****I AM THE CRIMINAL ITEM COMPONENT*****")
  return `
  <section class="criminalCard">
  <header class="criminalName">${criminal.name}</header>
  <div class="criminalAge">Age: ${criminal.age}</div>
  <div class="criminalCrime">Crime: ${criminal.conviction}</div>
  <div>Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
  <div>Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
  <button id="button--${criminal.name.split(" ").join("-")}">Interview Associates</button>
    <dialog class="dialog--criminal" id="details--${criminal.name.split(" ").join("-")}">
    <hr class="style-two">
    ${criminal.known_associates.map(ass =>`
    <div>Name: ${ass.name}</div>
    <div>Alibi: ${ass.alibi}</div>
    <hr class="style-two">`
    ).join("")}
    <button class="button--close">Close</button>
    </dialog>
  </section>
  `
}

eventHub.addEventListener("click", e => {
  if (e.target.id.startsWith("button--")) {
    const dialogSiblingSelector = `#${e.target.id}+dialog`
    const theDialog = document.querySelector(dialogSiblingSelector)
    theDialog.showModal()
  } else if (e.target.classList.contains("button--close")) {
    const dialogElement = e.target.parentNode
    dialogElement.close()
  }
})