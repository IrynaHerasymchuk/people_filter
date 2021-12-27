/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

export const SexFilter = ({ handleSexFilter }) => {
  const [sexMale, setSexMale] = useState(false);
  const [sexFemale, setSexFemale] = useState(false);

  const handleSexChange = (event) => {
    const { checked, name } = event.target;

    if (name === 'm') {
      setSexMale(checked);
    } else if (name === 'f') {
      setSexFemale(checked);
    }
  };

  useEffect(() => {
    handleSexFilter(sexMale, sexFemale);
  }, [sexMale, sexFemale]);

  return (
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
          onChange={handleSexChange}
        />
      </label>

      <label>
        Женский:
        <input
          type="checkbox"
          checked={sexFemale}
          name="f"
          className="App__checkbox"
          onChange={handleSexChange}
        />
      </label>
    </div>
  );
};
