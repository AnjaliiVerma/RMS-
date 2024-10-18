import React, { useState } from "react";

const ConsumptionEntry = () => {
  const [items, setItems] = useState([
    { id: 1000010, description: "0.45% SALINE BAG(ON-BOARD INSTRUMENT)", stock: 60, consumption: 0 },
    { id: 1000011, description: "0.45% SALINE SOLUTION", stock: 250, consumption: 0 },
    { id: 1000012, description: "1 ML SYRINGE (4/PKG)", stock: 100, consumption: 0 },
    { id: 1000013, description: "10 ENZYMATIC CLEANER", stock: 50, consumption: 0 },
    { id: 1000014, description: "10X EZ PREP SOLUTION, 2L", stock: 75, consumption: 0 },
    { id: 1000015, description: "12-WELL-PLATE", stock: 900, consumption: 0 },
    { id: 1000016, description: "12X75 MM ROUND BOTTOM POLYSTYRENE TUBES", stock: 63, consumption: 0 },
    { id: 1000017, description: "1-HEPTANESULFONIC ACID SODIUM SALT HPLC", stock: 30, consumption: 0 },
    { id: 1000018, description: "1-HEXANESULFONIC ACID SODIUM SALT HPLC G", stock: 70, consumption: 0 }
  ]);

  // Function to update consumption for an item
  const handleConsumptionChange = (id, value) => {
    setItems(
      items.map(
        item => (item.id === id ? { ...item, consumption: value } : item)
      )
    );
  };

  // Function to update the stock based on consumption
  const handleUpdate = (id) => {
    setItems(
      items.map(item => {
        if (item.id === id) {
          const newStock = item.stock - parseInt(item.consumption);  // Calculate the new stock
          if (newStock < 0) {
            alert("Error: Consumption exceeds available stock.");
            return item;
          }
          return { ...item, stock: newStock, consumption: 0 };  // Update stock and reset consumption
        }
        return item;
      })
    );
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <h4>Consumption Entry Form</h4>
          <a href="#" className="btn btn-link">Upload Excel</a>
        </div>
        <div className="card-body">
          <table className="table table-bordered table-hover table-responsive">
            <thead className="thead-light">
              <tr>
                <th>Selection</th>
                <th>Name</th>
                <th>Description</th>
                <th>Stock</th>
                <th>Consumption</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>
                    <input type="checkbox" className="form-check-input" />
                  </td>
                  <td>{item.id}</td>
                  <td>{item.description}</td>
                  <td>{item.stock}</td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={item.consumption}
                      onChange={e => handleConsumptionChange(item.id, e.target.value)}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleUpdate(item.id)}
                    >
                      Update
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

export default ConsumptionEntry;
