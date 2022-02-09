import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({getGreased, setGetGreased, getFilter, setGetFilter}) => {

	function handleGetGreased(event){
		setGetGreased(!getGreased)
	}

	function handleFilter(event){
		setGetFilter(getFilter => getFilter = event.target.value)
	}

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<button onClick={handleGetGreased}>{getGreased ? "Greased Got" : "Get Greased?"} </button>
			<select onChange={handleFilter}>
				<option value="" disabled selected hidden>Filter hogs by...</option>
				<option name="default" value="default">Default</option>
				<option name="name" value="name">Name</option>
				<option name="weight" value="weight">Weight</option>
			</select>
		</div>
	);
};

export default Nav;
