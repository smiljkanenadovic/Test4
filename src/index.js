import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ListCountries from './ListCountries'
import { getAll } from './services'
import Select from './Select'

const App = () => {

  const [countries, setCountries] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getAll().then(res =>{
      setCountries(res.data)
    })
  },[])

  return (
    <>
      <Select setCountries={setCountries} setShow={setShow}/>
      <hr></hr>
      <ListCountries countries={countries} show={show}/>
    </>
  )
  }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

