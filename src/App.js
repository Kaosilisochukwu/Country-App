import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import "bootstrap/dist/css/bootstrap.css";
//import Layout from './Components/Layout';
import ItemsContainer from './Components/ItemsContainer';

function App() {

  const [allCountries, setAllCountries] = useState([])
    useEffect(() => {
       fetch("https://restcountries.eu/rest/v2/all")
       .then(response => response.json())
       .then(data => {
            setAllCountries(data)
           })
       .catch(err => {
        setAllCountries([])
       })

   }, [allCountries])

  return (
    <div className="app">
      <Header />
      <ItemsContainer countries={allCountries} />
    </div>
  );
}

export default App;
