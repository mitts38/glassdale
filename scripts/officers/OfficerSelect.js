import { useOfficers } from "./OfficerProvider.js"
/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector("#mainContainer")
const contentTarget = document.querySelector(".filters__officer")

const OfficerSelect = () => {
    const officers = useOfficers()

    /*
        On the Event Hub, listen for a "change" event. Remember to write
        an `if` condition to make sure that it was the `#crimeSelect`
        element that changed.
        When that event happens, dispatch a custom message to your Event
        Hub so that the criminal list can listen for it and change what
        it renders.
    */
    eventHub.addEventListener("change", changeEvent => {
      if (changeEvent.target.id === "officerSelect") {
        const message = new CustomEvent("officerSelected", {
          detail: {
              officer: changeEvent.target.value
          }
        })
        eventHub.dispatchEvent(message)
      }
    })

    const render = officerCollection => {
        contentTarget.innerHTML = `
            <select class="dropdown officers" id="officerSelect">
                <option selected disabled hidden value="0">Filter by an officer...</option>
                ${
                  officerCollection.sort().map(
                    officer => `<option class="officer">${officer}</option>`
                  )
                }
            </select>
        `
    }

    render(officers)
}

export default OfficerSelect