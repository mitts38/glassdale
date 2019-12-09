// main.js
import { getCriminals } from "./criminals/criminaldataprovider.js"
import criminalslistComponent from "./criminals/criminallist.js"
import {getConviction} from "./conviction/ConvictionProvider.js"
import ConvictionSelect from "./conviction/convictionSelect.js"
getCriminals().then(
    
    () => criminalslistComponent()
)
    /*
        Now that you have the data, what
        component should be rendered?
    */
getConviction().then(
    () => ConvictionSelect()
)


    

    /*
        Now that you have the data, what
        component should be rendered?
    */