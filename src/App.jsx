import React, { useState } from 'react';
import './App.scss';
import { getUsers } from './api';
import { UsersList } from './components/UsersList';

const usersFromServer = getUsers();

export const App = () => {
  const [query, setQuery] = useState('');

  const visibleUsers = () => (
    usersFromServer.filter(user => user.includes(query))
  );

  return (
    <div className="App">
      <h1>
        Search users
      </h1>

      <label htmlFor="name-input">
        <input
          type="text"
          value={query}
          placeholder="Enter name"
          id="name-input"
          className="App__input"
          onChange={event => setQuery(event.target.value)}
        />
      </label>

      <label htmlFor="name-input">
        <input
          type="text"
          value={query}
          placeholder="Enter name"
          id="name-input"
          className="App__input"
          onChange={event => setQuery(event.target.value)}
        />
      </label>

      <label htmlFor="name-input">
        <input
          type="text"
          value={query}
          placeholder="Enter name"
          id="name-input"
          className="App__input"
          onChange={event => setQuery(event.target.value)}
        />
      </label>

      <UsersList users={visibleUsers} />
    </div>
  );
};
