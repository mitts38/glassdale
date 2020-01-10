const eventHub = document.querySelector("#mainContainer")
const contentTarget = document.querySelector(".filter__button")

let crime = null
let officer = null

export const FilterButton = () => {
 
  
  eventHub.addEventListener("crimeSelected", e => {
    crime = event.detail.crime
  })
  
  eventHub.addEventListener("officerSelected", e => {
    officer = event.detail.officer
  })

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "filterCrimeAndOfficer") {
      const message = new CustomEvent("filterClicked", {
        detail: {
          officer: officer,
          crime: crime
        }
      })
      debugger
      eventHub.dispatchEvent(message)
    }
  })

  const render = () => {
    contentTarget.innerHTML = `<button type="filter" id="filterCrimeAndOfficer">Filter</button>`
  }
  render()
}