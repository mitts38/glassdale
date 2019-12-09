
const criminalComponent = (criminals) => {
    return `
        <div class="criminals">
    
            <div class="criminals__name">${criminals.name}</div>
            <div>Age: ${criminals.age}</div>
                <div>Crime: ${criminals.conviction}</div>
                <div>Term Start: ${new Date(criminals.incarceration.start).toLocaleDateString('en-US')}
                </div>
                <div>Term End: ${new Date(criminals.incarceration.end).toLocaleDateString('en-US')}
                </div>
 </div>
    `
}
export default criminalComponent  