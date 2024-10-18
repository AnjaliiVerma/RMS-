import React, { useState } from "react";
import { Link } from "react-router-dom";

const Quotationoverview = ({ quotations }) => {
  const [searchTerm, setSearchTerm] = useState("");
  // Filter quotations based on the search term
  const filteredQuotations = quotations.filter(
    quote =>
      quote.orderNo.includes(searchTerm) ||
      quote.quotationNo.includes(searchTerm) ||
      quote.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //Detail Button Handler
  const [quotationDetail, setquotationDetail] = useState(null);

  const handleDetailsClick = order => {
    const orderRequest = quotations.find(quot => quot.orderRequest === order);
    setquotationDetail(order);
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h4>Quotation Overview</h4>
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
                <th>Order Request No</th>
                <th>Quotation No</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredQuotations.map((quote, index) =>
                <tr key={index}>
                  <td>
                    {quote.orderNo}
                  </td>
                  <td>
                    {quote.quotationNo}
                  </td>
                  <td>
                    {quote.status === "Approved"
                      ? <span className="badge bg-success">Approved</span>
                      : <span className="badge bg-warning">Pending</span>}
                  </td>
                  <td>
                    <Link to={`/approval/detail/${quote.orderNo}`}>
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
              Showing {filteredQuotations.length} of {quotations.length} entries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotationoverview;
