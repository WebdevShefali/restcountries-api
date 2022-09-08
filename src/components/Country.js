import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "./Spinner";

const Country = (props) => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();
  const fetchCountryData = async () => {
    try {
      const URL = `https://restcountries.com/v2/name/${name}`;
      setLoading(true);
      let countryData = await fetch(URL);
      let response = await countryData.json();
      setCountry(response);
      setLoading(false);
    } catch (error) {
      setCountry("Something went wrong! Please try again after some time.");
    }
  };
  useEffect(() => {
    fetchCountryData();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {loading && <Spinner />}
      {country.map((c) => {
        return (
          <div className="country" key={c.numericCode}>
            <div className="flag">
              <img src={c.flag} alt="" />
            </div>
            <div
              className="details"
              style={{ color: props.mode === "light" ? "#000000" : "#fff" }}
            >
              <h1>{c.name}</h1>
              <p>
                {" "}
                <strong>Native Name:</strong> {c.nativeName}
              </p>
              <p>
                <strong>Population:</strong> {c.population}
              </p>
              <p>
                <strong>Region:</strong> {c.region}
              </p>
              <p>
                <strong>Sub Region:</strong> {c.subregion}
              </p>
              <p>
                <strong>Capital:</strong> {c.capital}
              </p>
              <p>
                <strong>Top Level Domain:</strong> {c.topLevelDomain}
              </p>
              <p>
                <strong>Currencies:</strong>{" "}
                {c.currencies ? c.currencies[0].name : "N/A"}
              </p>
              <p>
                <strong>Languages:</strong>{" "}
                {c.languages ? c.languages[0].name : "N/A"}
              </p>

              <Link to={"/"}>
                <button
                  className="btn backBtn"
                  style={{
                    backgroundColor:
                      props.mode === "dark"
                        ? "hsl(209, 23%, 22%)"
                        : "hsl(0, 0%, 98%)",
                    color: props.mode === "light" ? "#000000" : "#fff",
                  }}
                >
                  <i className="fa-solid fa-arrow-left"></i> Back to home
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Country;
