import React from 'react';
import './UsersList.scss';

export const UsersList = ({ users }) => (
  <ul className="users">
    {users.map(user => (
      <li
        className="users__item"
        key={user.id}
      >
        <p className="users__name">
          {`${user.name} ${user.lastname}`}
        </p>

        <p className="users__age">
          <span className="users__age-heading">
            Возраст:&nbsp;
          </span>

          <span>
            {user.age}
          </span>
        </p>

        <p className="users__sex">
          <span className="users__sex-heading">
            Пол:&nbsp;
          </span>

          <span>
            {user.sex === 'm' ? 'мужской' : 'женский'}
          </span>
        </p>
      </li>
    ))}
  </ul>
);
