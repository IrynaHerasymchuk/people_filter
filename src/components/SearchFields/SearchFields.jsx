import React, { useState } from 'react';
import { SexFilter } from '../SexFilter/SexFilter';
import './SearchFields.scss';

export const SearchFields = ({ handleFilter, handleSexFilter }) => {
  const [firstname, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');

  const handleNameInput = (event) => {
    const { value } = event.target;

    setName(value);
    handleFilter(value, 'name');
  };

  const handleLastnameInput = (event) => {
    const { value } = event.target;

    setLastname(value);
    handleFilter(value, 'lastname');
  };

  const handleAgeInput = (event) => {
    const value = Number(event.target.value) || null;

    setAge(value);
    handleFilter(value, 'age');
  };

  return (
    <div className="search-fields">
      <label>
        Введите имя:
        <input
          type="text"
          value={firstname}
          placeholder="Введите имя"
          className="search-fields__input"
          onChange={handleNameInput}
        />
      </label>

      <label>
        Введите фамилию:
        <input
          type="text"
          value={lastname}
          placeholder="Введите фамилию"
          className="search-fields__input"
          onChange={handleLastnameInput}
        />
      </label>

      <label>
        Введите возраст:
        <input
          type="text"
          value={age}
          placeholder="Введите возраст"
          className="search-fields__input"
          onChange={handleAgeInput}
        />
      </label>

      <SexFilter handleSexFilter={handleSexFilter} />
    </div>
  );
};
