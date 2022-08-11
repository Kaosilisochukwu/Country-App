import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.css";
import ItemsContainer from "./Components/ItemsContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailsContainer from "./Components/DetailsContainer";

function App() {
  const [className, setClassName] = useState("App");

  const [selectedCountries, setSelectedCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [param, setParam] = useState("all");
  const url = "https://restcountries.com/v3.1/";

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(`${url}${param}`);
      const data = await response.json();
      setSelectedCountries(
        data.filter(
          (country) =>
            country.name.toLowerCase().indexOf(search.toLowerCase()) >= 0
        )
      );
    };
    fetchCountries();
  }, [param, search]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setParam(e.target.value);
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleHeaderClick = () => {
    setClassName(() => (className === "App" ? "App-dark" : "App"));
  };

  return (
    <Router>
      <div className={className}>
        <Header handleHeaderClick={handleHeaderClick} />
        <Switch>
          <Route path="/" exact>
            <ItemsContainer
              handleChange={handleChange}
              handleSearchChange={handleSearchChange}
              selectedCountries={selectedCountries}
            />
          </Route>
          <Route path="/details/:name">
            <DetailsContainer countries={selectedCountries} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
