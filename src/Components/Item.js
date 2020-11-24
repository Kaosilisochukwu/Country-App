import React from 'react'
import { Link } from "react-router-dom"

const Item = ({ country }) => {
  let nativeName = country.name;
  return (
    
    <div className ="main-item">
      <div className="cards">
        <div className="item-container">
          <img src = {country.flag} className="img" alt="flag"/>
          <div className="item-details">
            <div>
              <h6>{country.name}</h6>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
          </div>
          <div className="details-link">
              <Link to={`/details/${nativeName}`} style={{textDecoration: "none"}} className="details-btn">More</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Item

