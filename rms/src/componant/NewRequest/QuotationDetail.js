import React from "react";
import { useParams, Link } from "react-router-dom";

const QuotationDetail = ({ quotations }) => {
 
  const { orderNo } = useParams();

  // Find the quotation using the order number
  const quotation = quotations.find(q => q.orderNo === orderNo);

  if (!quotation) {
    return <div>order not found.</div>;
  }

  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-header bg-secondary text-white">
          <h4 className="mb-0">Quotation Details</h4>
          <button className="btn btn-primary float-end">Back to Index</button>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <h5 className="text-primary">Quotation Details:</h5>
              <div className="mb-2">
                <strong>Request No:</strong>
                <input
                  type="text"
                  className="form-control"
                  value={quotation.orderNo}
                  readOnly
                />
              </div>
              <div className="mb-2">
                <strong>Quotation No:</strong>
                <input
                  type="text"
                  className="form-control"
                  value={quotation.quotationNo}
                  readOnly
                />
              </div>
              <div className="mb-2">
                <strong>Created Date:</strong>
                <input
                  type="text"
                  className="form-control"
                  value={quotation.date}
                  readOnly
                />
              </div>
            </div>
            <div className="col-md-6">
              <h5 className="text-primary">Product Summary:</h5>
              <div className=" border rounded p-2" >
                <div className="d-flex justify-content-between">
                  <span>Product Number: {quotation.productNo}</span>
                  <span>Amount:{quotation.Amount}</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span>Count: {quotation.count}</span>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div className="card-footer text-center pt-3 pb-3 ">
          <button className="btn btn-success me-2">Approve</button>
          <button className="btn btn-danger">Reject</button>
        </div>
      </div>
    </div>
  );
};

export default QuotationDetail;
