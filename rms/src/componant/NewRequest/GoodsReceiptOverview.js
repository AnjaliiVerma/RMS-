import React, { useState } from "react";
import { Link } from "react-router-dom";

const GoodsReceiptOverview = ({receipts}) => {
  
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the receipts based on the search term
  const filteredReceipts = receipts.filter(
    receipt =>
      receipt.quotationNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      receipt.obdNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      receipt.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //Detail Button Handler
  const [receiptDetail, setReceiptDetail] = useState(null);

  const handleDetailsClick = obd => {
    const obdRequest = receipts.find(rec => rec.obdRequest === obd);
    setReceiptDetail(obd);
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h4>Goods Receipt Overview</h4>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-6">
              <label>Show entries:</label>
              <select className="form-select d-inline-block w-auto ms-2">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </div>
            <div className="col-md-6 text-end">
              <input
                type="text"
                className="form-control w-auto d-inline-block"
                placeholder="Search..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Quotation No</th>
                <th>OBD No</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredReceipts.map((receipt, index) =>
                <tr key={index}>
                  <td>
                    {receipt.quotationNo}
                  </td>
                  <td>
                    {receipt.obdNo}
                  </td>
                  <td>
                    <span className="badge bg-info">Processing</span>
                  </td>
                  <td>
                    <Link to={`/receipt/detail/${receipt.obdNo}`}>
                    <button className="btn btn-primary" type="button">
                      Details
                    </button>
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="d-flex justify-content-between">
            <p>
              Showing {filteredReceipts.length} of {receipts.length} entries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodsReceiptOverview;
