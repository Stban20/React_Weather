import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Form = ({ search, setSearch, setCheck }) => {
  const [error, setError] = useState(false);

  // extract city and country
  const { city, country } = search;

  //function that put the elements in the state
  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validate
    if (city.trim() === "" || country.trim() === "") {
      setError(true);
      return;
    }
    //If the validation pass
    setError(false);
    setCheck(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error message="All the info is required" /> : null}
      <div className="input-field cal s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">City: </label>
      </div>
      <div className="input-field cal s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">--Select Country--</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="DE">Germany</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="country">Country: </label>
      </div>
      <div className="input-field col s12">
        <button
          type="submit"
          className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
        >
          Search
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {
  search: PropTypes.object.isRequired,
  setSearch: PropTypes.func.isRequired,
  setCheck: PropTypes.func.isRequired,
};

export default Form;
