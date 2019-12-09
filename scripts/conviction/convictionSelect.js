/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".filters__crime")


const ConvictionSelect = () => {
    // Get all convictions from application state


    const convictions = useConvictions()


    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.id === "crimeSelect") {
            const selectedcrime = changeEvent.target.value

            const crimeNameMessage = new CustomEvent("crimeSelected", {
                detail: {
                    crime: selectedcrime
                }
            })
            eventHub.dispatchEvent(crimeNameMessage)
        }
    })



    const render = convictionsCollection => {
        /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
        */
        contentTarget.innerHTML += `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
            convictionsCollection.sort().map(conviction =>
                `<option class = "crime">${conviction}</option>`
            )
            }
                    </select>   
        `
    

    }
    render(convictions)
}
export default ConvictionSelect



