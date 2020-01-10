let convictions = []

export const useConvictions = () => convictions.sort().slice()

export const getConvictions = () => {
  console.log("Geting conviction data")
  return fetch("http://criminals.glassdale.us/crimes")
    .then(response => response.json())
    .then(
      parsedConvictions => {
        // console.table(parsedConvictions)
        convictions = parsedConvictions.slice()
        console.log("Conviction data")
      }
    )
}