import React, { useState } from "react";

const RoleAuthentication = () => {
  // Dummy users data with roles
  const usersData = [
    { username: "admin", password: "admin123", role: "admin" },
    { username: "user", password: "user123", role: "user" },
    { username: "guest", password: "guest123", role: "guest" },
    { username: "Anjali", password: "Anjali123", role: "Admin" }
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState("");

  // Handle login function
  const handleLogin = () => {
    const foundUser = usersData.find(
      user => user.username === username && user.password === password
    );
    if (foundUser) {
      setCurrentUser(foundUser);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  // Handle logout function
  const handleLogout = () => {
    setCurrentUser(null);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h4>{currentUser ? "Welcome to RMS:" : "Login"}</h4>
        </div>
        <div className="card-body">
          {!currentUser ? (
            <div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
              </div>

              {error && <div className="alert alert-danger">{error}</div>}

              <button className="btn btn-primary w-100" onClick={handleLogin}>
                Login
              </button>
            </div>
          ) : (
            <div>
              <h5>Hey {currentUser.username}!</h5>
              <p>
                You are logged in as <strong>{currentUser.role}</strong>.
              </p>

              {/* Display different content based on role */}
              {currentUser.role === "admin" && (
                <div className="alert alert-info">
                  <p>You have full access as an admin.</p>
                </div>
              )}

              {currentUser.role === "user" && (
                <div className="alert alert-warning">
                  <p>You have limited access as a user.</p>
                </div>
              )}

              {currentUser.role === "guest" && (
                <div className="alert alert-secondary">
                  <p>You have guest access with minimal permissions.</p>
                </div>
              )}

              <button className="btn btn-danger mt-3" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoleAuthentication;
