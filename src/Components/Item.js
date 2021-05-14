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
          <img src={country.flag} className="img" alt="flag" style={{height: "200px"}} />
          <div className="item-details">
            <div>
              <h4 style={{ margin: "1rem 0" }}>{country.name}</h4>
              <p>
                <b>Population: </b>
                {country.population}
              </p>
              <p>
                <b>Region: </b>
                {country.region}
              </p>
              <p>
                <b>Capital: </b>
                {country.capital}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
