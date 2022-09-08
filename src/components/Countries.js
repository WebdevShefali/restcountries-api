import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const Countries = (props) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const getData = async () => {
    try {
      const url = "https://restcountries.com/v2/all";
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      setCountries(parsedData);
      setLoading(false);
    } catch (error) {
      setCountries("Something went wrong! Please try again after some time.");
    }
  };

  const handleChange = (e) => {
    setSearchInput(e);
    if (searchInput) {
      const searchedCountry = countries.filter((name) => {
        return Object.values(name)
          .join(" ")
          .toLowerCase()
          .includes(e.toLowerCase());
      });
      setFilter(searchedCountry);
    } else {
      setFilter(countries);
    }
  };
  const filterData = async (e) => {
    let data = await fetch(`https://restcountries.com/v2/region/${e}`);
    let res = await data.json();
    setCountries(res);
  };

  useEffect(() => {
    getData();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="search">
        <div
          className="searchContainer"
          style={{
            backgroundColor:
              props.mode === "dark" ? "hsl(0, 0%, 52%)" : "hsl(0, 0%, 98%)",
          }}
        >
          <i className="fa fa-search searchIcon"></i>
          <input
            className="searchBox"
            id="search"
            type="search"
            name="search"
            placeholder="Search for a country..."
            style={{
              backgroundColor:
                props.mode === "dark" ? "hsl(0, 0%, 52%)" : "hsl(0, 0%, 98%)",
            }}
            onChange={(e) => handleChange(e.target.value)}
            value={searchInput}
          />
        </div>
        <ul
          className="navbar-nav"
          style={{
            backgroundColor:
              props.mode === "dark" ? "hsl(0, 0%, 52%)" : "hsl(0, 0%, 98%)",
            color: props.mode === "light" ? "#000000" : "#fff",
          }}
        >
          <li
            className="dropdown"
            style={{
              backgroundColor:
                props.mode === "dark" ? "hsl(0, 0%, 52%)" : "hsl(0, 0%, 98%)",
              color: props.mode === "light" ? "#000000" : "#fff",
            }}
          >
            <a
              className=" dropdown-toggle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                backgroundColor:
                  props.mode === "dark" ? "hsl(0, 0%, 52%)" : "hsl(0, 0%, 98%)",
                color: props.mode === "light" ? "#000000" : "#fff",
              }}
            >
              Filter by region
            </a>
            <ul
              className="dropdown-menu"
              style={{
                backgroundColor:
                  props.mode === "dark" ? "hsl(0, 0%, 52%)" : "hsl(0, 0%, 98%)",
              }}
            >
              <option
                className="dropdown-item"
                onClick={(e) => filterData(e.target.value)}
                value="Asia"
              >
                Asia
              </option>
              <option
                className="dropdown-item"
                onClick={(e) => filterData(e.target.value)}
                value="Africa"
              >
                Africa
              </option>
              <option
                className="dropdown-item"
                onClick={(e) => filterData(e.target.value)}
                value="Americas"
              >
                Americas
              </option>
              <option
                className="dropdown-item"
                onClick={(e) => filterData(e.target.value)}
                value="Europe"
              >
                Europe
              </option>
              <option
                className="dropdown-item"
                onClick={(e) => filterData(e.target.value)}
                value="Asia"
              >
                Oceania
              </option>
            </ul>
          </li>
        </ul>

        {loading && <Spinner />}
      </div>
      {searchInput.length > 0 ? (
        <div className="cards ">
          {filter.map((element) => {
            return (
              <div
                className="card"
                key={element.numericCode}
                style={{
                  width: "18rem",
                  backgroundColor:
                    props.mode === "dark"
                      ? "hsl(209, 23%, 22%)"
                      : "hsl(0, 0%, 100%)",
                  color: props.mode === "light" ? "#000000" : "#fff",
                }}
              >
                <img src={element.flag} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">{element.name}</h4>
                  <p className="card-text">Population: {element.population} </p>
                  <p className="card-text">Region: {element.region} </p>
                  <p className="card-text">Capital: {element.capital} </p>
                  <Link to={`/Countries/${element.name}`}>
                    <button
                      className="btn"
                      style={{
                        backgroundColor:
                          props.mode === "dark"
                            ? "hsl(209, 23%, 22%)"
                            : "hsl(0, 0%, 98%)",
                        color: props.mode === "light" ? "#000000" : "#fff",
                      }}
                    >
                      Learn more...
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="cards ">
          {countries.map((element) => {
            return (
              <div
                className="card"
                key={element.numericCode}
                style={{
                  width: "18rem",
                  backgroundColor:
                    props.mode === "dark"
                      ? "hsl(209, 23%, 22%)"
                      : "hsl(0, 0%, 100%)",
                  color: props.mode === "light" ? "#000000" : "#fff",
                }}
              >
                <img src={element.flag} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">{element.name}</h4>
                  <p className="card-text">Population: {element.population} </p>
                  <p className="card-text">Region: {element.region} </p>
                  <p className="card-text">Capital: {element.capital} </p>
                  <Link to={`/Countries/${element.name}`}>
                    <button
                      className="btn"
                      style={{
                        backgroundColor:
                          props.mode === "dark"
                            ? "hsl(209, 23%, 22%)"
                            : "hsl(0, 0%, 98%)",
                        color: props.mode === "light" ? "#000000" : "#fff",
                      }}
                    >
                      Learn more...
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Countries;
