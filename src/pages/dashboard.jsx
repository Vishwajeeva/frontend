// Dashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { apiService } from '../api';

export default function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Retrieve user info from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  
  if (!user) {
    return <p>Please login first.</p>;
  }

  const handleLogout = () => {
    // Clear user info and tokens from localStorage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    
    // Redirect to login page after logout
    navigate("/login");
  };

  // Fetch data from API when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.getData();
        setData(response);
      } catch (err) {
        setError(err.message || "Error fetching data.");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.username}!</p>
      <p>Your Role: {user.role}</p>
      <button onClick={handleLogout}>Logout</button>
      
      {error && <div>Error: {error}</div>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
