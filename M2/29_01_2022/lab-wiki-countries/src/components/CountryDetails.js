import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiCountries from '../utils/apiCountries';

export const CountryDetails = ({ countries }) => {

  const [country, setCountry] = useState({})

  const { id } = useParams()

  const getCountry = async (id) => {
    const data = await apiCountries.getOneCountry(id)
    setCountry(data)
  }

  useEffect(() => {
    getCountry(id)
  }, [id])

  return (
    <div className='col-7'>
      <h1> {country.name && country.name.common} </h1>
      <table className='table'>
        <thead />
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital && country.capital[0]}</td>
          </tr>
          <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders && country.borders.map(cca3 => {
                  return(
                    <li key= {cca3}>
                      <Link to={`/${cca3}`}> 
                        {countries.find(country => country.alpha3Code === cca3).name.common}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};
