import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import "bootstrap/dist/css/bootstrap.css";
//import Layout from './Components/Layout';
import ItemsContainer from './Components/ItemsContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from './Components/Details';

function App() {

  const [className, setClassName] = useState("App")



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


   const handleHeaderClick = () => {
    setClassName(()=> className === "App" ? "App-dark" : "App");
   }

  return (
    <Router>
      <div className={className}>
        <Header handleHeaderClick={handleHeaderClick} />
        <Switch>
          <Route>
            <ItemsContainer handleChange={handleChange} handleSearchChange={handleSearchChange} selectedCountries={selectedCountries}/>
          </Route>
          <Route>
            <Details/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
