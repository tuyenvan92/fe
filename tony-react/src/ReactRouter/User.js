import React, { useEffect, useState } from 'react';

import UserList from './UserList';

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const result = await fetch('https://tony-json-server.herokuapp.com/api/users');
      const data = await result.json();
      setUsers(data?.data || [])
    }

    fetchUsers();
  }, [])

  console.log('users: ', users)

  return (
    <div>
      <div className="user_mode">
        <h2>Users</h2>
        <button type="button">List View</button>
        <button type="button">Grid View</button>
      </div>
      
      <UserList users={users} />
    </div>
  )
}
