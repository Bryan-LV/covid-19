import React, { useState, useEffect } from 'react'
import { Title, Cards, Filter, Graph, Footer } from './components/presentational'
import axios from 'axios'

function App() {
  const [data, setData] = useState(null);
  const [countryList, setCountryList] = useState(null);
  const [singleCountry, setSingleCountry] = useState(null);

  // Get global statistics
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

  // Fetch all countries included in api to use in filter component
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

  // Fetch single country's statistics 
  useEffect(() => {
    if (singleCountry) {
      const fetchSingleCountry = async () => {
        try {
          const request = await axios.get(`https://covid19.mathdro.id/api/countries/${singleCountry.value}`);
          const response = request.data;
          console.log(response);
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
      <div className="container">
        <Cards data={data} />
        <Filter countryList={countryList} setSingleCountry={setSingleCountry} />
        <Graph data={data} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
