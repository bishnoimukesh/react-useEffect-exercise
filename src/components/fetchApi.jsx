import axios from 'axios';
import React, { useState } from 'react';

export default function fetchApi() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const clickHandler = async() => {
    setLoading(true);
    await axios
      .get('../api/users')
      .then((response) => {
        setUsers(response.data.users);
        setLoading(false);
      })
      .catch((error) => console.log('error is : ', error));
  };

  return (
    <div className="App">
      <h1> Data {loading && 'Loading ...'} </h1>
      <button onClick={clickHandler}> Click to load data from server </button>
      <div>{users && users.map((user) => <li>{user.name}</li>)}</div>
    </div>
  );
}
