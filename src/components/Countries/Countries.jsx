import React from "react";
import "./Countries.css";
import { Link, useLoaderData } from "react-router-dom";

const Countries = () => {
  const countries = useLoaderData();
  return (
    <div>
      <h3>All Countries:{countries.length}</h3>
      <ul>
        {
            countries.map(country => <li key={country.ccn3}>{country.name.common}<Link to={`/country/${country.cca3}`}>Details</Link></li>)
        }
      </ul>
    </div>
  );
};

export default Countries;
