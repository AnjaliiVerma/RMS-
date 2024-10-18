import React, { useState } from "react";
import "./AdminUser.css"; // Optional custom CSS if needed

const AdminUserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Manager", status: "Approved" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Rejected" },
    { id: 3, name: "David Wilson", email: "david@example.com", role: "Admin", status: "Pending" },
    { id: 4, name: "Dr. Robert", email: "robert@example.com", role: "Employee", status: "Pending" },
  ]);

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h3>Admin User Management</h3>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <span className={`badge ${user.status === "Approved" ? "bg-success" : user.status === "Rejected" ? "bg-danger" : "bg-warning"}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-primary me-2">Edit</button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUserManagement;
