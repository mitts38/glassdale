let witnesses = []

export const useWitnesses = () => witnesses.slice()

export const getWitnesses = () => {
  return fetch("http://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then(
      parsedWitnesses => {
        // console.table(parsedCriminals)
        witnesses = parsedWitnesses.slice()
        console.log("*****I FOR SURE HAVE THAT WITNESSES DATA*****")
      }
    )
}