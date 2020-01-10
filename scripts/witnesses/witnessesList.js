import { useWitnesses } from "./witnessesDataProvider.js";
import { WitnessComponent } from "./witnesses.js";


const eventHub = document.querySelector("#mainContainer")
const criminalHTML = document.querySelector(".criminalsContainer")

const WitnessListComponent = () => {

  const appStateWitnesses = useWitnesses()

  eventHub.addEventListener("click", e => {
    if (e.target.id === "witnessStatements") {
  const render = witnessCollection => {
    criminalHTML.innerHTML = `
      ${
      witnessCollection.map(
        (witness) => {
          return WitnessComponent(witness)
        }
      ).join("")
      }`
  }
  render(appStateWitnesses)
  }
})
}

export default WitnessListComponent