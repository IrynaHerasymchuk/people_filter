import React, { useEffect, useState } from 'react';
import './SexFilter.scss';

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
    <div className="checkbox-area">
      <p className="checkbox-area__title">
        Выберите пол:
      </p>

      <div className="checkbox-area__wrapper">
        <label>
          <input
            type="checkbox"
            checked={sexMale}
            name="m"
            className="checkbox-area__item"
            onChange={handleSexChange}
          />
          Мужской
        </label>
      </div>

      <div className="checkbox-area__wrapper">
        <label>
          <input
            type="checkbox"
            checked={sexFemale}
            name="f"
            className="checkbox-area__item"
            onChange={handleSexChange}
          />
          Женский
        </label>
      </div>
    </div>
  );
};
