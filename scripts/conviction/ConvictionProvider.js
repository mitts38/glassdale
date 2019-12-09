let conviction = []



export const useConvictions = () => {
  return  conviction
}
export const getConviction = ()=> {
  //request dat from other url on the interwebs//   
    return fetch ("http://criminals.glassdale.us/crimes")
    //when the other place respond with a string, parse the string.//
    .then(response => response.json()
    )
    //then do something cool with your data that is parsed into javascript arry//
    .then(

        parsedconviction =>{
            console.log(" I have data")
            conviction = parsedconviction.slice()
        }
    )
    /*
        Load database state into application state with a fetch().
        Make sure the last then() updates the criminals array
    */
}