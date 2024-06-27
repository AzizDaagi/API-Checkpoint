import React, {useState, useEffect} from 'react'
import axios from "axios"

const Users = () => {
  const [listOfUsers, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error(error)
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {listOfUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;