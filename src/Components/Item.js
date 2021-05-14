import React from "react";
import { useHistory } from "react-router-dom";

const Item = ({ country }) => {
  const history = useHistory();
  let nativeName = country.name;
  const handleClick = () => history.push(`/details/${nativeName}`);
  return (
    <div className="main-item">
      <div className="cards">
        <div className="item-container" onClick={handleClick}>
          <img src={country.flag} className="img" alt="flag" />
          <div className="item-details">
            <div>
              <h6 style={{ margin: "1rem 0" }}>{country.name}</h6>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
