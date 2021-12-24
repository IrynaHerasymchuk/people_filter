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
        // eslint-disable-next-line eqeqeq
        : user[filterBy] === value
    ));

    setVisibleUsers(filteredUsers);
  };

  return (
    <div className="App">
      <h1>
        Search users
      </h1>

      <SearchFields
        handleFilter={handleFilter}
      />

      {visibleUsers.length
        ? <UsersList users={visibleUsers} />
        : <UsersList users={users} />
      }
    </div>
  );
};
