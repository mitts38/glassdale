let criminals = []



export const useCriminals = () => {
  return  criminals
}
export const getCriminals = ()=> {
 
    return fetch ("http://criminals.glassdale.us/criminals")
    
    .then(response => response.json()
    )
    .then(

        parsedCriminal =>{
            console.log(" I have data")
            criminals = parsedCriminal.slice()
        }
    )
    /*
        Load database state into application state with a fetch().
        Make sure the last then() updates the criminals array
    */
}