
import criminalsComponent from "./criminal.js"
import { useCriminals } from "./criminaldataprovider.js"

const eventHub = document.querySelector(".container")

 const criminalslistComponent = () => {
     console.log("This is the criminal list componenet")
     const contentElement = document.querySelector(".criminalsContainer")
    const criminals = useCriminals()


    eventHub.addEventListener("crimeSelected", event => {
         const crimeName = event.detail.crime 
         const filteredCriminals = criminals.filter(
             (indivisualcriminal)=>{
                 if(indivisualcriminal.conviction === crimeName){
                     return indivisualcriminal
                 }

             }
         ) 
         render(filteredCriminals)  
     
     
    })





// Add to the existing HTML in the content element
let render = criminals => {
    contentElement.innerHTML = `
      ${

        criminals.map(
            (criminal) => {
                return criminalsComponent(criminal)

            }
        ).join("")
        }
  
    `


}
render(criminals)
 }
export default criminalslistComponent
