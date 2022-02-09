import React, {useState} from "react";
import Nav from "./Nav";
import Tile from "./Tile.js"

import hogs from "../porkers_data";

function App() {
	const [getGreased, setGetGreased] = useState(false)
	const greasedPiggies = hogs.filter(hog => hog.greased === true)

	const [getFilter, setGetFilter] = useState("none")

	// const orderedArray = hogs.sort((a, b) => a.name > b.name ? 1 : -1)
	// function filterHogs(hogList){
	// 	if(getFilter !== "none"){
	// 		hogList.sort((a, b) => a.getFilter < b.getFilter ? 1 : -1)
	// 	}
	// }

	//if filter selected
		//call filterhogs
		//render new sorted array
	

	const returnTiles = (hogList) => {
		//console.log(filterHogs(hogList))
		return hogList.map(hog => {
			return (
				<Tile
					key={hog.name}
					name={hog.name}
					image={hog.image}
					specialty={hog.specialty}
					weight={hog.weight}
					greased={hog.greased ? "Oh yeah" : "Nope"}
					highestMedal={hog["highest medal achieved"]}
				/>
			)
		})
	}

	return (
		<div className="App">
			<Nav 
				getFilter={getFilter}
				setGetFilter={setGetFilter}
				getGreased={getGreased}
				setGetGreased={setGetGreased}
			/>
			{getGreased ? returnTiles(greasedPiggies) : returnTiles(hogs)}
		</div>
	);
}

export default App;
