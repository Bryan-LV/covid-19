import React, { useState } from 'react';

import Select from 'react-select';

function Filter({ countryList }) {
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
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Select onChange={handleChange} defaultInputValue="global" options={options} />
        <button>Find country</button>
      </form>
    </div>
  );
}

export default Filter;