import React, { useState } from "react";
// import "./Sidebar.css";
import "../App.css";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isCollapsed }) => {
  const [activeDropdown, setActiveDropdown] = useState(""); // Track the currently open dropdown

  const location = useLocation(); // Get current location
  // Toggle function to handle the dropdown opening/closing
  const toggleDropdown = dropdown => {
    setActiveDropdown(
      prevDropdown => (prevDropdown === dropdown ? "" : dropdown)
    );
  };
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };
  return (
    <div
      className={`sidebar ${isCollapsed ? "collapsed" : ""}`}
      style={{ background: "#ffffff" }}
    >
      <div className="sidebar-container">
        <ul className="nav flex-column " style={{ padding: "10px" }}>
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
            >
              <i className="bi bi-grid-fill me-2" /> Dashboard
            </Link>
          </li>

          {/* User Management */}
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => toggleDropdown("userManagement")}
            >
              <i className="bi bi-people me-2" /> User Management
              <span className="dropdown-arrow" style={{ paddingLeft: "80px" }}>
                {activeDropdown === "userManagement" ? "▲" : "▼"}
              </span>
            </a>
            {activeDropdown === "userManagement" &&
              <ul className="list-unstyled nav-content ps-3">
                <li>
                  <Link
                    to="/admin-user-management"
                    className={`nav-link ${isActive("/admin-user-management")
                      ? "active"
                      : ""}`}
                  >
                    <i className="bi bi-circle" /> Admin User Management
                  </Link>
                </li>
              </ul>}
          </li>

          {/* Master Data */}
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => toggleDropdown("masterData")}
            >
              <i className="bi bi-folder me-2" /> Master Data
              <span className="dropdown-arrow" style={{ paddingLeft: "125px" }}>
                {activeDropdown === "masterData" ? "▲" : "▼"}
              </span>
            </a>
            {activeDropdown === "masterData" &&
              <ul className="list-unstyled nav-content ps-3">
                <li>
                  <Link to="/product"  className={`nav-link ${isActive("/product") ? "active" : ""}`}>
                    <i className="bi bi-circle" /> Product Overview
                  </Link>
                </li>
                <li>
                  <Link to="/store"  className={`nav-link ${isActive("/store") ? "active" : ""}`}>
                    <i className="bi bi-circle" /> Store Overview
                  </Link>
                </li>
              </ul>}
          </li>

          {/* Inventory Update */}
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => toggleDropdown("inventoryUpdate")}
            >
              <i className="bi bi-box me-2" /> Inventory Update
              <span className="dropdown-arrow" style={{ paddingLeft: "90px" }}>
                {activeDropdown === "inventoryUpdate" ? "▲" : "▼"}
              </span>
            </a>
            {activeDropdown === "inventoryUpdate" &&
              <ul className="list-unstyled nav-content ps-3">
                <li>
                  <Link to="/inventory"  className={`nav-link ${isActive("/inventory") ? "active" : ""}`}>
                    <i className="bi bi-circle" /> Inventory Update Overview
                  </Link>
                </li>
                <li>
                  <Link to="/consumption"  className={`nav-link ${isActive("/consumption") ? "active" : ""}`}>
                    <i className="bi bi-circle" /> Consumption Entry Form
                  </Link>
                </li>
              </ul>}
          </li>

          {/* New Request */}
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => toggleDropdown("newRequest")}
            >
              <i className="bi bi-bell me-2" /> New Request
              <span className="dropdown-arrow" style={{ paddingLeft: "120px" }}>
                {activeDropdown === "newRequest" ? "▲" : "▼"}
              </span>
            </a>
            {activeDropdown === "newRequest" &&
              <ul className="list-unstyled nav-content ps-3">
                <li>
                  <Link to="/inquiry"  className={`nav-link ${isActive("/inquiry") ? "active" : ""}`}>
                    <i className="bi bi-circle" /> Inquiry Order
                  </Link>
                </li>
                <li>
                  <Link to="/approval"  className={`nav-link ${isActive("/approval") ? "active" : ""}`}>
                    <i className="bi bi-circle" /> Quotation Approval Overview
                  </Link>
                </li>
                <li>
                  <Link to="/receipt"  className={`nav-link ${isActive("/receipt") ? "active" : ""}`}>
                    <i className="bi bi-circle" /> Goods Receipt Overview
                  </Link>
                </li>
                <li>
                  <Link to="/invoice"  className={`nav-link ${isActive("/invoice") ? "active" : ""}`}>
                    <i className="bi bi-circle" /> Invoice Overview
                  </Link>
                </li>
              </ul>}
          </li>

          {/* Reports */}
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={() => toggleDropdown("reports")}
            >
              <i className="bi bi-gear me-2" /> Reports
              <span className="dropdown-arrow" style={{ paddingLeft: "160px" }}>
                {activeDropdown === "reports" ? "▲" : "▼"}
              </span>
            </a>
            {activeDropdown === "reports" &&
              <ul className="list-unstyled nav-content ps-3">
                <li>
                  <a className="nav-link" href="#">
                    <i className="bi bi-circle" /> Open Request Report
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    <i className="bi bi-circle" /> Open Goods Receipts Report
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    <i className="bi bi-circle" /> Open Invoice Confirmation
                    Report
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    <i className="bi bi-circle" /> Last Consumption Report
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    <i className="bi bi-circle" /> Inventory Status Report
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    <i className="bi bi-circle" /> Sales Order Details Report
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    <i className="bi bi-circle" /> Completed Requests Report
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    <i className="bi bi-circle" /> Goods Receipt Details Report
                  </a>
                </li>
              </ul>}
          </li>

          {/* Role & Authentication */}
          <li className="nav-item">
            <Link to="/role" className={`nav-link ${isActive("/role") ? "active" : ""}`}>
              <i className="bi bi-shield-lock me-2" /> Role & Authentication
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
