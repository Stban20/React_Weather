import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";

function App() {
  //state Form
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  const [check, setCheck] = useState(false);
  const [apiResult, setApiResult] = useState({});
  const [error, setError] = useState(false)

  const { city, country } = search;

  //useEffect
  useEffect(() => {
    const checkAPI = async () => {
      if (check) {
        const apiKey = "06b725a7d00cc93cd459e94a7374470a";
        const url = `
        https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}
        `;
        const answer = await fetch(url);
        const result = await answer.json();
        setApiResult(result);
        setCheck(false);

        //check if the search was successfull
        if(result.cod === '404'){
          setError(true)
        }else{
          setError(false)
        }
      }
    };
    checkAPI();
    // eslint-disable-next-line
  }, [check]);

  let errorComponent
  if(error){
    errorComponent = <Error message="Any results"/>
  }else{
    errorComponent = <Weather apiResult={apiResult} />
  }
  
  return (
    <Fragment>
      <Header title="Weather React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form search={search} setSearch={setSearch} setCheck={setCheck} />
            </div>
            <div className="col m6 s12">
              {errorComponent}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
