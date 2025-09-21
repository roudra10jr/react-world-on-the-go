import React, { use, useState } from "react";
import Country from "./Country/Country";
// import "./Countries.css";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
	const countriesData = use(countriesPromise);
	const countries = countriesData.countries;

	const [visitedCountries, setVisitedCountries] = useState([]);
	const [visitedFlags, setVisitedFlags] = useState([]);
	// console.log(countries);
	// const countriesStyle = {
	// 	display: "grid",
	// 	gridTemplateColumns: "repeat(3, 1fr)",
	// 	gap: "18px",
	// };
	const handleVisitedCountries = (country) => {
		console.log("visited countries clicked", country);
		const newVisitedCountry = [...visitedCountries, country];
		setVisitedCountries(newVisitedCountry);
	};

	// flags:
	const visitedFlag = (countryFlag) => {
		// console.log(country);

		const newvisitedFlags = [...visitedFlags, countryFlag];
		setVisitedFlags(newvisitedFlags);
	};

	return (
		<div>
			<h1>Countries Length: {countries.length}</h1>
			<h3>Countries Visited: {visitedCountries.length}</h3>

			<ol>
				{
					//
					visitedCountries.map((country) => (
						<li key={country.ccn3.ccn3}>{country.name.common}</li>
					))
				}
			</ol>

			<h3>Visited Countries Flags: {visitedFlags.length}</h3>
			<div className="visited-countries-flags">
				{
					//
					visitedFlags.map((flag, index) => (
						<img key={index} src={flag}></img>
					))
				}
			</div>

			<div className="countries">
				{countries.map((country) => (
					<Country
						key={country.ccn3.ccn3}
						country={country}
						handleVisitedCountries={handleVisitedCountries}
						visitedFlag={visitedFlag}
					></Country>
				))}
			</div>
		</div>
	);
};

export default Countries;
