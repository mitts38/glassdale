let officers = []

 export const useOfficers = () => {
    return officers
}

export const getOfficers = () => {
    return fetch("http://criminals.glassdale.us/criminals",{
    method: "get"
})
        .then(response => response.json())
        .then(
            parsedcriminals => {
                console.table(parsedcriminals)
                officers = parsedOfficers.slice()
            }
        )
}