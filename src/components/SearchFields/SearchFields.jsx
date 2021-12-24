/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export const SearchFields = ({ handleFilter }) => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState(null);

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
    <div className="seach-fields">
      <label htmlFor="name-input">
        <input
          type="text"
          value={name}
          placeholder="Введите имя"
          id="name-input"
          className="App__input"
          onChange={handleNameInput}
        />
      </label>

      <label htmlFor="surname-input">
        <input
          type="text"
          value={lastname}
          placeholder="Введите фамилию"
          id="lastname-input"
          className="App__input"
          onChange={handleLastnameInput}
        />
      </label>

      <label htmlFor="age-input">
        <input
          type="text"
          value={age}
          placeholder="Введите возраст"
          id="age-input"
          className="App__input"
          onChange={handleAgeInput}
        />
      </label>
    </div>
  );
};
