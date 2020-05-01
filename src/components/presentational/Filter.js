import React, { useState } from 'react';

import Select from 'react-select';

function Filter({ countryList, setSingleCountry }) {
  const [value, setValue] = useState(null);

  if (!countryList) {
    return null;
  }

  const options = countryList.map(country => ({ value: country, label: country }))

  const handleChange = (selectedOption) => {
    setValue(selectedOption);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      setSingleCountry(value);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <Select onChange={handleChange} defaultInputValue="global" options={options} />
        <button className="filter-btn">Find country</button>
      </form>
    </div>
  );
}

export default Filter;