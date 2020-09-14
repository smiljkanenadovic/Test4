
import React from 'react';
import { useState, useEffect } from 'react';
import { getAll, getByRegion } from './services';
 
const Select = ({setCountries,setShow}) => {
    
    const [value, setValue] = useState('');

    useEffect(() => {
        value !== '' ?
            getByRegion(value).then(res =>{
            setCountries(res.data)
            })
        :
            getAll(value).then(res =>{
            setCountries(res.data)
            })
        
    },[value])

      return(
          <select 
          value={value} 
          onChange={(e) => {setValue(e.target.value)
                            setShow(true)   
          }}>
           
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
      )


};

export default Select;

