import React from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import Region from './Region';

 const Search = ({ handleChange, handleSearchChange }) => {

    //const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania", "Polar"]

    return (
        <div className="top">
            <div className= "search"> 
                <div className="form-group has-search">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="text" className="form-control" placeholder="Search" onChange= {handleSearchChange} />
                </div>
            </div>
            <div className= "filter">
            <select  className="browser-default custom-select mb-3 mr-5" onChange={handleChange}>
                <option value="all">All</option>
                <option value="region/asia">Asia</option>
                <option value="region/africa">Africa</option>
                <option value="region/americas">Americas</option>
                <option value="region/europe">Europe</option>
                <option value="region/oceania">Oceania</option>
                <option value="region/polar">Polar</option>
            </select>
            </div>
        </div>
    )
}

export default Search
