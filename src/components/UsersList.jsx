/* eslint-disable react/prop-types */
import React from 'react';
import './UsersList.scss';

export const UsersList = ({ users }) => (
  <ul className="users">
    {users.map(user => (
      <li className="users__item">
        <span>
          {user.name}
          {user.lastname}
        </span>

        <span>
          Возраст:
          {user.age}
        </span>

        <span>
          Пол:
          {user.sex}
        </span>
      </li>
    ))}
  </ul>
);
