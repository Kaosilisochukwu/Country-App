import React, { useEffect, useState } from 'react'
import Item from './Item';
import Search from './Search';

const ItemsContainer = () => {
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [search, setSearch] = useState("")
    const [param, setParam] = useState("all")
    const url = "https://restcountries.eu/rest/v2/";

     useEffect(() => {
        const fetchCountries = async () => {
            const response = await fetch(`${url}${param}`)
            const data = await response.json();
            setSelectedCountries(data.filter(country => country.name.toLowerCase().indexOf(search.toLowerCase()) >= 0))
        }
         fetchCountries()

   }, [selectedCountries, param, search,])


    const handleChange = (e) => {
        console.log(e.target.value)
        setParam(e.target.value)
    }
    const handleSearchChange = e => {
        setSearch(e.target.value)
    }

    return(
        <>
            <Search handleChange={handleChange} handleSearchChange={handleSearchChange}/>
            {selectedCountries.map( country => {
                if(country !== null){
                return <Item country = {country} key = {country.name}/>
                }
                return <p>Nocountry</p>
            })}
        </>
    )
}

export default ItemsContainer
