"use client"
import React, { useEffect, useState } from 'react';

interface User {
  ID: number;
  email: string;
  password: string;
}

const Page: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/get_users');
        const data: User[] = await res.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once on component mount

  return (
    <>
      <h3>Hey, This is MySQL Data .. !</h3>
      <ul>
        {users.map((user) => (
          <li key={user.ID}>
            Email: {user.email} | Password: {user.password}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Page;
