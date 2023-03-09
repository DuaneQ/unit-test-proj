import { useEffect, useState } from 'react';
import './App.css';
import { IoCaretDown } from "react-icons/io5";
import { IoCaretUp } from "react-icons/io5";

function Countries() {

  const [nameOrder, setNameOrder] = useState('asc');
  const [contOrder, setContOrder] = useState('asc');
  const [popOrder, setPopOrder] = useState('asc');

  const sortByName = () => {
    const sorted = [...data].sort((a, b) => {
      if (nameOrder === 'asc') {
        return b.name.common > a.name.common ? -1 : b.name.common < a.name.common ? 1 : 0
      } else {
        return b.name.common < a.name.common ? -1 : b.name.common > a.name.common ? 1 : 0
      }
    });
    setData(sorted);
    setNameOrder(nameOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortByContinent = () => {
    const sorted = [...data].sort((a, b) => {
      if (contOrder === 'asc') {
        return b.continents > a.continents ? -1 : b.continents < a.continents ? 1 : 0
      } else {
        return b.continents < a.continents ? -1 : b.continents > a.continents ? 1 : 0
      }
    });
    setData(sorted);
    setContOrder(contOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortByPopulation = () => {
    const sorted = [...data].sort((a, b) =>
      popOrder === 'asc' ? a.population - b.population : b.population - a.population
    );
    setData(sorted);
    setPopOrder(popOrder === 'asc' ? 'desc' : 'asc');
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,continents,population,flag')
      .then((resp) => resp.json())
      .then((apiData) => {
        setData(apiData);
      }, []);
  }, []);

  return (
    <div className="app-container">
      <h1 style={{ textAlign: "center" }}>Country Table Data</h1>
      <table>
        <thead>
          <tr>
            <th onClick={sortByName}>
              <div className='column-title'>
                <div>
                  Name
                </div>
                {nameOrder === 'asc' ? <IoCaretDown /> : <IoCaretUp />}
              </div>
            </th>
            <th onClick={sortByContinent}>
              <div className='column-title'>
                <div>
                  Continents
                </div>
                {contOrder === 'asc' ? <IoCaretDown /> : <IoCaretUp />}
              </div>
            </th>
            <th onClick={sortByPopulation}>
              <div className='column-title'>
                <div>
                  Population
                </div>
                {popOrder === 'asc' ? <IoCaretDown /> : <IoCaretUp />}
              </div>
            </th>
            <th>Flag</th>
          </tr>
        </thead>
        <tbody>
          {data.map((country, i) => (
            <tr key={country.flag + i}>
              <td>{country.name.common}</td>
              <td>{country.continents}</td>
              <td>{country.population}</td>
              <td>{country.flag}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Countries;
