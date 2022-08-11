import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";

const DetailsContainer = ({ countries }) => {
  let { name } = useParams();
  const [country, setCountry] = useState(null);
  //debugger
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const data = await response.json();
      setCountry(data[0]);
    };
    fetchCountries();
  }, [name]);
  return (
    country && (
      <div>
        <Details country={country} countries={countries} />
      </div>
    )
  );
};

export default DetailsContainer;
