import { CriminalComponent } from "./Criminal.js";
import { useCriminals } from "./CriminalDataProvider.js";

const eventHub = document.querySelector("#mainContainer")
const criminalHTML = document.querySelector(".criminalsContainer")

const CriminalListComponent = () => {
  // Load the application state to be used by this component
  const appStateCriminals = useCriminals()

  // What should happen when detective selects a crime?
  eventHub.addEventListener("filterClicked", event => {
    //  remembered to add the id of the crime to the event detail, 
    const crimeId = event.detail.crime
    const officerName = event.detail.officer
    
      //  Filter to criminals application 
    
    const matchingCriminals = appStateCriminals.filter(
      (criminal) => {
        if (criminal.conviction === crimeId) {
          return criminal
        }
      })
      .filter(criminal => {
        if (criminal.arrestingOfficer === officerName) {
          return criminal
        }
      })
    render(matchingCriminals)
  })

  // eventHub.addEventListener("officerSelected", event => {
  //   const officerName = event.detail.officer

  //   const OfficersCriminals = appStateCriminals.filter(
  //     (convict) => {
  //       if (convict.arrestingOfficer.toLowerCase() === officerName.toLowerCase()) {
  //         return appStateCriminals
  //       }
  //     })
  //   render(OfficersCriminals)
  // })
  /*
      Then invoke render() and pass the filtered collection as
      an argument
  */
  eventHub.addEventListener("click", e => {
    if (e.target.id === "showAllCriminals") {
      render(appStateCriminals)
    }
  })

  const render = crimeCollection => {
    criminalHTML.innerHTML = `
      ${
      crimeCollection.map(
        (criminal) => {
          return CriminalComponent(criminal)
        }
      ).join("")
      }`
  }
  render(appStateCriminals)
}

export default CriminalListComponent

