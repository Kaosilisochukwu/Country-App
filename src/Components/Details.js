import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Button from "./Button";

const Details = ({ country, countries }) => {
  const [value, setValues] = useState([]);
  const [lang, setLang] = useState("");
  const [curr, setCurr] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [borders, setBorders] = useState([]);
  const [borderCountries, setBorderCountries] = useState([]);
  const history = useHistory();

  useEffect(() => {
    console.log(country);
    setValues(country);
    setLang(value.languages ? value.languages[0].name : "");
    if (country.languages) {
      setLanguages(country.languages);
    }
    if (country.borders) {
      setBorders(country.borders);
      console.log(borders);
      console.log(countries);
      setBorderCountries(
        countries.filter((count) => borders.includes(count.alpha3Code))
      );
    }
    if (country.currencies) {
      setCurr(country.currencies);
    }
  }, [borders, countries, country, value]);
  const goBack = () => history.push("/");

  console.log(lang);
  const {
    name,
    flag,
    nativeName,
    population,
    region,
    subregion,
    topLevelDomain,
    capital,
  } = value;
  console.log(languages);
  console.log(borderCountries);
  return (
    <div className="details">
      <Button content="← Back" handleClick={goBack} />
      <div className="details-main">
        <div className="details-image">
          <img
            src={flag}
            alt={`${name} flag`}
            style={{ width: "100%", height: "24rem" }}
          />
        </div>
        <div className="details-info">
          <h1>{name}</h1>
          <div className="detailsContainer">
            <div>
              <p>
                <b>Native Name: </b>
                {nativeName}
              </p>
              <p>
                <b>Population: </b>
                {population}
              </p>
              <p>
                <b>Region: </b>
                {region}
              </p>
              <p>
                <b>Sub Region: </b>
                {subregion}
              </p>
              <p>
                <b>Capital: </b>
                {capital}
              </p>
            </div>
            <div>
              <p>
                <b>Top Level Domain: </b>
                {topLevelDomain}
              </p>
              <p>
                <b>Currencies: </b>
                {curr.length > 0 &&
                  curr.map((x, i) => {
                    if (i === curr.length - 1) {
                      return <span>{x.name}</span>;
                    }
                    return <span>{x.name}, </span>;
                  })}
              </p>
              <p>
                <b>Languages: </b>
                {languages.length > 0 &&
                  languages.map((language, i) => {
                    if (i === languages.length - 1) {
                      return <span>{language.name}</span>;
                    }
                    return <span>{language.name}, </span>;
                  })}
              </p>
            </div>
          </div>
          <div>
            <p>
              <b>Border Countries: </b>
              {borderCountries &&
                borderCountries.map((border) => {
                  return (
                    <span style={{ marginLeft: "1rem" }}>
                      <Button content={border.name.split("(")[0]} />
                    </span>
                  );
                })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
