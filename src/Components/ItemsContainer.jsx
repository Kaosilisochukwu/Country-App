import React from 'react'
import Item from './Item';
import Search from './Search';

const ItemsContainer = ({handleChange, handleSearchChange, selectedCountries}) => {
    return(
        <div className="main">
            <Search handleChange={handleChange} handleSearchChange={handleSearchChange}/>
            <div className ="main-item">
                {selectedCountries.map( country => {
                    return <Item country = {country} countries={selectedCountries} key = {country.name}/>
                })}
            </div>
        </div>
    )
}

export default ItemsContainer
