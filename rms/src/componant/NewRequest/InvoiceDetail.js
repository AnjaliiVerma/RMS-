import React from "react";
import { useParams } from "react-router-dom";

const InvoiceDetail = ({ invoices }) => {
  const { invoiceNo } = useParams();

  const invoc = invoices.find(i => i.invoiceNo === invoiceNo);

  if (!invoc) {
    return <div>invoice detail not found.</div>;
  }

  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-header bg-secondary text-white">
          <h4 className="mb-0">Invoice Summary</h4>
          <button className="btn btn-primary float-end ">Back to Index</button>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <h5 className="text-primary">Invoice Details:</h5>
              <div className="mb-2">
                <strong>Invoice No:</strong>
                <input
                  type="text"
                  className="form-control"
                  value={invoc.invoiceNo}
                  readOnly
                />
              </div>
              <div className="mb-2">
                <strong>OBD No:</strong>
                <input
                  type="text"
                  className="form-control"
                  value={invoc.obdNo}
                  readOnly
                />
              </div>
              <div className="mb-2">
                <strong>Quotation No.</strong>
                <input
                  type="text"
                  className="form-control"
                  value={invoc.quotationNo}
                  readOnly
                />
              </div>
            </div>
            <div className="col-md-6">
              <h5 className="text-primary">Summary:</h5>
              <div className=" border rounded p-2">
                <div className="d-flex justify-content-between">
                  <span>
                    Quantity: {invoc.quantity}
                  </span>
                  <span>
                    Amount: {invoc.Amount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetail;
