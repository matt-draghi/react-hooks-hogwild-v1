import {useState} from "react"
import Details from "./Details.js"

function Tile({name, image, specialty, weight, greased, highestMedal}){
    
    const [showDetails, setShowDetails] = useState(false)

    function handleShowDetails(){
        console.log("Piggy piggy piggy")
        setShowDetails(!showDetails)
    }

    return(
        <div className="tile" onClick={handleShowDetails}>
            <h1>{name}</h1>
            <img src={image} alt={image}/>
            <Details 
                specialty={specialty}
                weight={weight}
                greased={greased}    
                highestMedal={highestMedal}
                showDetails={showDetails}
            />
        </div>
    )
}

export default Tile