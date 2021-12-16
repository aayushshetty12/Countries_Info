import "./App.css";
import Heading from "./components/Heading.js";
import Search from "./components/Search.js";
import Countries from "./components/Countries.js";
import Loader from "./components/Loader.js";
import Error from "./components/Error.js";
import earth from "./earth.png";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  //console.log(countries[0]);
  const fetch = async () => {
    setLoading(true);
    const url = !name ? "all" : "name/" + name;
    //console.log(url);
    await axios
      .get("https://restcountries.com/v3.1/" + url)
      .then((result) => {
        //console.log(result.data)
        setCountries(result.data);
        setLoading(false);
        setError();
      })
      .catch((errorr) => {
        errorr = Object.values(errorr);
        setLoading(false);
        setError(errorr[2] ? "wrong" : "net");
        //console.log(error)
      });
  };

  useEffect(() => fetch(), [name]);

  return (
    <div className="App">
      <Heading earth={earth} />
      <Search search={(name) => setName(name)} />
      {!loading ? (
        !error ? (
          <div className="main">
            {countries.map((country) => {
              const currencyArray =
                country.currencies !== undefined
                  ? Object.values(country.currencies)
                  : "Null";
              const capital = country.capital ? country.capital : "NA";
              const currency =
                currencyArray !== "Null" ? currencyArray[0].name : "NA";
              const symbol =
                currencyArray !== "Null" && currencyArray[0].symbol
                  ? currencyArray[0].symbol
                  : "NA";

              return (
                <Countries
                  name={country.name.common}
                  flag={country.flags.png}
                  capital={capital}
                  currency={currency}
                  symbol={symbol}
                  popl={country.population}
                  cont={country.region}
                />
              );
            })}
          </div>
        ) : (
          <Error error={error} />
        )
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
