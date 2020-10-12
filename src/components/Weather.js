import React from "react";
import PropTypes from "prop-types";

const Weather = ({ apiResult }) => {
  const { name, main } = apiResult;

  if (!name) return null;

  //transfor from kelvin to celcius
  const gradeKelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>The Weather in {name} is:</h2>
        <p>
          Temp Max:
          {parseFloat(main.temp_max - gradeKelvin, 10).toFixed(1)}
          <span> &#x2103; </span>
        </p>
        <p className="temperatura">
          {parseFloat(main.temp - gradeKelvin, 10).toFixed(1)}
          <span> &#x2103; </span>
        </p>
        <p>
          Temp Min:
          {parseFloat(main.temp_min - gradeKelvin, 10).toFixed(1)}
          <span> &#x2103; </span>
        </p>
      </div>
    </div>
  );
};

Weather.propTypes = {
  apiResult: PropTypes.object.isRequired,
};

export default Weather;
