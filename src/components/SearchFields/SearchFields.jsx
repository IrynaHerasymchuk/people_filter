/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export const SearchFields = ({ handleFilter, handleSexFilter }) => {
  const [firstname, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [sexMale, setSexMale] = useState(false);
  const [sexFemale, setSexFemale] = useState(false);

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

  // const handleSexInput = (event) => {
  //   const { checked, name } = event.target;

  //   name === 'm'
  //     ? setSexMale(checked)
  //     : setSexFemale(checked);

  //   handleSexFilter(sexMale, sexFemale);
  // };

  const handleMaleSexInput = (event) => {
    const { checked } = event.target;

    setSexMale(checked);

    // handleSexFilter(sexMale, sexFemale);
  };

  const handleFemaleSexInput = (event) => {
    const { checked } = event.target;

    setSexFemale(checked);

    // eslint-disable-next-line no-console
    console.log(checked, sexMale, sexFemale);

    handleSexFilter(sexMale, sexFemale);
  };

  return (
    <div className="seach-fields">
      <label>
        Введите имя:
        <input
          type="text"
          value={firstname}
          placeholder="Введите имя"
          className="App__input"
          onChange={handleNameInput}
        />
      </label>

      <label>
        Введите фамилию:
        <input
          type="text"
          value={lastname}
          placeholder="Введите фамилию"
          className="App__input"
          onChange={handleLastnameInput}
        />
      </label>

      <label>
        Введите возраст:
        <input
          type="text"
          value={age}
          placeholder="Введите возраст"
          className="App__input"
          onChange={handleAgeInput}
        />
      </label>

      <div className="App__checkbox-area">
        <p>
          Выберите пол:
        </p>

        <label>
          Мужской:
          <input
            type="checkbox"
            checked={sexMale}
            name="m"
            className="App__checkbox"
            onChange={handleMaleSexInput}
          />
        </label>

        <label>
          Женский:
          <input
            type="checkbox"
            checked={sexFemale}
            name="f"
            className="App__checkbox"
            onChange={handleFemaleSexInput}
          />
        </label>
      </div>
    </div>
  );
};
