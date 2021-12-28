import React, { useEffect, useState } from 'react';
import './App.scss';
import { SearchFields } from './components/SearchFields/SearchFields';
import { UsersList } from './components/UsersList/UsersList';

const URL = 'https://venbest-test.herokuapp.com/';

const getUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  users.forEach((user, index) => {
    Object.assign(user, { id: index });
  });

  return users;
};

export const App = () => {
  const users = getUsers();
  const [visibleUsers, setVisibleUsers] = useState(users);

  const handleFilter = (value, filterBy) => {
    const filteredUsers = users.filter(user => (
      typeof user[filterBy] === 'string'
        ? user[filterBy].includes(value)
        : user[filterBy] === value
    ));

    setVisibleUsers(filteredUsers);
  };

  const handleSexFilter = (sexMale, sexFemale) => {
    let filteredUsers;

    if (sexMale && !sexFemale) {
      filteredUsers = users.filter(user => user.sex === 'm');
    } else if (!sexMale && sexFemale) {
      filteredUsers = users.filter(user => user.sex === 'f');
    } else {
      filteredUsers = users;
    }

    setVisibleUsers(filteredUsers);
  };

  return (
    <div className="App">
      <div className="App__search-area">
        <h2 className="App__search-heading">
          Поиск пользователей
        </h2>

        <SearchFields
          handleFilter={handleFilter}
          handleSexFilter={handleSexFilter}
        />
      </div>

      <div className="App__users-list">
        <h1 className="App__users-heading">
          Найденные пользователи
        </h1>

        {!users.length && (
          <p>
            Загрузка...
          </p>
        )}

        {visibleUsers.length
          ? <UsersList users={visibleUsers} />
          : <UsersList users={users} />
        }
      </div>
    </div>
  );
};
