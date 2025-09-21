import React, { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountries, visitedFlag }) => {
	// console.log(country);
	const [visited, setVisited] = useState(false);

	const handleVisit = () => {
		// return setVisited(true);
		// 1st way: toggle:
		// if (visited) {
		// 	return setVisited(false);
		// } else {
		// 	return setVisited(true);
		// }

		//2nd way : using ternary operator inside js block;
		// {
		// 	visited ? setVisited(false) : setVisited(true);
		// }

		// // 3rd way:
		// setVisited(visited ? false : true);

		// 4th way: bang sign (!)
		setVisited(!visited);
		handleVisitedCountries(country);
	};

	const handleVisitedFlag = () => {
		visitedFlag(country?.flags?.flags?.png);
	};

	return (
		// <div
		// 	className={`country text-center  ${
		// 		visited ? "country-visited" : "country-not-visited"
		// 	}`}
		// >

		<div className={`country ${visited && "country-visited"}`}>
			<img
				src={country?.flags?.flags?.png}
				alt={country.flags.flags.alt}
			></img>
			<h3>Name: {country.name.common}</h3>
			<p>Population: {country.population.population}</p>
			<p>
				Area: {country.area.area}{" "}
				{country.area.area > 300000 ? "Big Country" : "Small Country"}
			</p>

			<button onClick={handleVisit}>
				{visited ? "Visited" : "Not Visited"}
			</button>
			<button onClick={handleVisitedFlag}>Visited Flag</button>
		</div>
	);
};

export default Country;
