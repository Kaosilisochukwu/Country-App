import React from 'react'

const Item = ({ country }) => {
    return (
        
        <div className ="main-item">
            <div className="cards">
                <div className="item-container">
                            <img src = {country.flag} className="img" alt="flag"/>
                        <div className="item-details">
                            <h6>{country.name}</h6>
                            <p>Population: {country.population}</p>
                            <p>Region: {country.region}</p>
                            <p>Capital: {country.capital}</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Item

