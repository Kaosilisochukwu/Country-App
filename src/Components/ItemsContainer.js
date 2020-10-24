import React, { useEffect, useState } from 'react'
import Item from './Item';
import Search from './Search';
import { Link, Switch } from "react-router-dom";

const ItemsContainer = ({handleChange, handleSearchChange, selectedCountries}) => {
    return(
        <div className="main">
            <Search handleChange={handleChange} handleSearchChange={handleSearchChange}/>
            <div className ="main-item">
                {selectedCountries.map( country => {
                    if(country !== null){
                    return <Item country = {country} key = {country.name}/>
                    }
                    return <p>Nocountry</p>
                })}
            </div>
        </div>
    )
}

export default ItemsContainer
