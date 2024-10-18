import React from 'react'

const InventoryUpdateQuery = () => {
    const productStock = [
        { productStockId: 'PS001', productId: 'P1001', minStock: 10, maxStock: 50, reorderPoint: 15 },
        { productStockId: 'PS002', productId: 'P1002', minStock: 20, maxStock: 60, reorderPoint: 25 },
        { productStockId: 'PS003', productId: 'P1003', minStock: 5, maxStock: 30, reorderPoint: 10 },
        // Add more entries as needed
      ];
  return (
    <div className="container mt-4">
    <div className="card">
      <div className="card-header">
        <h4>Product Stock Overview</h4>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ProductStockId</th>
                <th>ProductId</th>
                <th>MinStock</th>
                <th>MaxStock</th>
                <th>ReorderPoint</th>
              </tr>
            </thead>
            <tbody>
              {productStock.map((stock, index) => (
                <tr key={index}>
                  <td>{stock.productStockId}</td>
                  <td>{stock.productId}</td>
                  <td>{stock.minStock}</td>
                  <td>{stock.maxStock}</td>
                  <td>{stock.reorderPoint}</td>
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

export default InventoryUpdateQuery;