let criminals = []

export const useCriminals = () => criminals.slice()

export const getCriminals = () => {
  console.log("*****I FOR SURE HAVE THAT CRIMINALS DATA*****")
  return fetch("http://criminals.glassdale.us/criminals")
    .then(response => response.json())
    .then(
      parsedCriminals => {
        // console.table(parsedCriminals)
        criminals = parsedCriminals.slice()
        console.log("*****I FOR SURE HAVE THAT CRIMINALS DATA*****")
      }
    )
}