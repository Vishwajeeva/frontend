import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

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

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.username}!</p>
      <p>Your Role: {user.role}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
