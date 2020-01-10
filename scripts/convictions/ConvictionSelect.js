import { useConvictions } from "./ConvictionProvider.js"
/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector("#mainContainer")
const contentTarget = document.querySelector(".filters__crime")

const ConvictionSelect = () => {
    const convictions = useConvictions()

    /*
        On the Event Hub, listen for a "change" event. Remember to write
        an `if` condition to make sure that it was the `#crimeSelect`
        element that changed.
        When that event happens, dispatch a custom message to your Event
        Hub so that the criminal list can listen for it and change what
        it renders.
    */
    eventHub.addEventListener("change", changeEvent => {
      if (changeEvent.target.id === "crimeSelect") {
        const message = new CustomEvent("crimeSelected", {
          detail: {
              crime: changeEvent.target.value
          }
        })
        eventHub.dispatchEvent(message)
      }
    })

    const render = convictionsCollection => {
        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option selected disabled hidden value="0">Filter by a crime...</option>
                ${
                  convictionsCollection.sort().map(
                    conviction => `<option class="conviction">${conviction}</option>`
                  )
                }
            </select>
        `
    }

    render(convictions)
}

export default ConvictionSelect