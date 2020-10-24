import React from 'react'

 const Search = ({ handleChange, handleSearchChange }) => {
    return (
        <div className="top">
            <div className= "search"> 
                <div className="form-group has-search dark">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="text" className="form-control" placeholder="Search for a country..." onChange= {handleSearchChange} />
                </div>
            </div>
            <div className= "filter">
            <select  className="browser-default custom-select mb-3 mr-5 dark" onChange={handleChange}>
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
