import React from 'react'
import { useState } from 'react';

 const StoreOverview = () => {
    const [stores, ] = useState([
        { storeName: 'Store 1', location: 'Location A', manager: 'Manager A' },
        { storeName: 'Store 2', location: 'Location B', manager: 'Manager B' },
        { storeName: 'Store 3', location: 'Location C', manager: 'Manager C' }
      ]);
   
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
         <h4> Store Overview</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>StoreName</th>
                  <th>Location</th>
                  <th>Manager</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {stores.map((store, index) => (
                  <tr key={index}>
                    <td>{store.storeName}</td>
                    <td>{store.location}</td>
                    <td>{store.manager}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoreOverview;