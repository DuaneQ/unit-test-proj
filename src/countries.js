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
        if (b.name.common > a.name.common) {
          return -1;
        }
        if (b.name.common > a.name.common) {
          return 1;
        }
        return 0;
      } else {
        if (b.name.common < a.name.common) {
          return -1;
        }
        if (b.name.common < a.name.common) {
          return 1;
        }
        return 0;
      }
    });
    setData(sorted);
    let newOrder = nameOrder === 'asc' ? 'desc' : 'asc';
    setNameOrder(newOrder);
  };

  const sortByContinent = () => {
    const sorted = [...data].sort((a, b) => {
      if (contOrder === 'asc') {
        if (b.continents > a.continents) {
          return -1;
        }
        if (b.continents > a.continents) {
          return 1;
        }
        return 0;
      } else {
        if (b.continents < a.continents) {
          return -1;
        }
        if (b.continents < a.continents) {
          return 1;
        }
        return 0;
      }
    });
    setData(sorted);
    let newOrder = contOrder === 'asc' ? 'desc' : 'asc';
    setContOrder(newOrder);
  };

  const sortByPopulation = () => {
    const sorted = [...data].sort((a, b) => {
      if (popOrder === 'asc') {
        return a.population - b.population;
      } else {
        return b.population - a.population;
      }
    });
    setData(sorted);
    let newOrder = popOrder === 'asc' ? 'desc' : 'asc';
    setPopOrder(newOrder);
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
              Name
              {nameOrder === 'asc' && <IoCaretDown />}
              {nameOrder === 'desc' && <IoCaretUp />}
            </th>
            <th onClick={sortByContinent}>
              Continent
              {contOrder === 'asc' && <IoCaretDown />}
              {contOrder === 'desc' && <IoCaretUp />}
            </th>
            <th onClick={sortByPopulation}>
              Population
              {popOrder === 'asc' && <IoCaretDown />}
              {popOrder === 'desc' && <IoCaretUp />}
            </th>
            <th>Flag</th>
          </tr>
        </thead>
        <tbody>
          {data.map((country) => (
            <tr key={country.flag}>
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
