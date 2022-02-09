function Details({specialty, weight, greased, highestMedal, showDetails}){
    if(showDetails){
        return(
            <>
                <p>Sepcialty: {specialty}</p>
                <p>Weight: {weight}</p>
                <p>Greased: {greased}</p>
                <p>Highest Medal Achieved: {highestMedal}</p>
            </>
        )
    }
    else if(!showDetails){
        return null
    }
}

export default Details