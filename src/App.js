import React, { useState, useEffect } from 'react'
import { Title, Cards, Filter, Graph } from './components/presentational'
import axios from 'axios'

function App() {
  const [data, setData] = useState(null);
  const [countryList, setCountryList] = useState(null);
  const [singleCountry, setSingleCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get('https://covid19.mathdro.id/api');
        const { confirmed, deaths, recovered, lastUpdate } = request.data;
        setData({ confirmed, deaths, recovered, lastUpdate });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const request = await axios.get('https://covid19.mathdro.id/api/countries');
        const countries = request.data.countries.map(country => country.name);
        setCountryList(countries);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCountries()
  }, [])

  useEffect(() => {
    if (singleCountry) {
      const fetchSingleCountry = async () => {
        try {
          const request = await axios.get(`https://covid19.mathdro.id/api/countries/${singleCountry}`);
          const response = request.data;
          setData(response)
        } catch (error) {
          console.log(error);
        }
      }

      fetchSingleCountry()
    }

  }, [singleCountry])

  return (
    <div className="App">
      <Title />
      <Cards data={data} />
      <Filter countryList={countryList} />
      <Graph data={data} />
    </div>
  );
}

export default App;
