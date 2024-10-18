import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Invoiceoverview = ({invoices}) => {

  const [searchTerm, setSearchTerm] = useState("");

  // Filter the invoices based on search term
  const filteredInvoices = invoices.filter(
    invoice =>
      invoice.invoiceNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.obdNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.quotationNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.status.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //Detail Button Handler
  const [invoiceDetail, setInvoiceDetail] = useState(null);

  const handleDetailsClick = invoic => {
    const invoicRequest = invoices.find(inv => inv.invoicRequest === invoic);
    setInvoiceDetail(invoic);
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h4>Invoice Overview</h4>
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
                <th>Invoice No</th>
                <th>OBD No</th>
                <th>Quotation No</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.length > 0
                ? filteredInvoices.map((invoice, index) =>
                    <tr key={index}>
                      <td>
                        {invoice.invoiceNo}
                      </td>
                      <td>
                        {invoice.obdNo}
                      </td>
                      <td>
                        {invoice.quotationNo}
                      </td>
                      <td>
                        <span
                          className={`badge ${getBadgeClass(invoice.status)}`}
                        >
                          {invoice.status}
                        </span>
                      </td>
                      <td>
                        <Link to={`/invoice/detail/${invoice.invoiceNo}`}>
                        <button className="btn btn-primary" type="button">
                          Details
                        </button>
                        </Link>
                      </td>
                    </tr>
                  )
                : <tr>
                    <td colSpan="5" className="text-center">
                      No entries found
                    </td>
                  </tr>}
            </tbody>
          </table>
          <div className="d-flex justify-content-between">
            <p>
              Showing {filteredInvoices.length} of {invoices.length} entries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
// Utility function to assign badge classes based on the status
const getBadgeClass = status => {
  switch (status) {
    case "Accepted":
      return "bg-success";
    case "Progressing":
      return "bg-info";
    case "Pending":
      return "bg-warning";
    default:
      return "bg-light";
  }
};
export default Invoiceoverview;
