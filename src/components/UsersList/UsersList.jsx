/* eslint-disable react/prop-types */
import React from 'react';
import './UsersList.scss';

export const UsersList = ({ users }) => (
  <ul className="users">
    {users.map(user => (
      <li className="users__item" key={user.id}>
        <p>
          {`${user.name} ${user.lastname}`}
        </p>

        <p>
          {`Возраст: ${user.age}`}
        </p>

        <p>
          {`Пол: ${user.sex === 'm' ? 'мужской' : 'женский'}`}
        </p>
      </li>
    ))}
  </ul>
);
