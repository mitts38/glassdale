import { useCriminals } from "../criminals/CriminalDataProvider.js/index.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".alibiContainer")


const DialogComponent = () => {

    eventHub.addEventListener("associateButtonClicked", event => {
        const criminals = useCriminals()
        console.log(event.detail.criminalId)

    
         
         
         
        const foundCriminal = criminals.find(
            (singleCriminal) => {
                return singleCriminal.id === parseInt(event.detail.criminalId, 10)
            }
        )

        const alibisHTML = foundCriminal.known_associates.map(
            (singleAssociate) => {
                return `
                    <div>
                        ${singleAssociate.name}: ${singleAssociate.alibi}
                    </div>
                `
            }
        ).join("")

        document.querySelector(".alibi__text").innerHTML = alibisHTML
        document.querySelector(".alibies").showModal()

    })

    const render = () => {
        contentTarget.innerHTML = `
            <dialog class="alibies">
                <div class="alibi__text"></div>
                <button id="closeDialog"></button>
            </dialog>
        `
    }

    render()
}

export default DialogComponent