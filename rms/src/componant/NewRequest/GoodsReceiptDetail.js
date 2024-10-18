import React from "react";
import { useParams } from "react-router-dom";

const GoodsReceiptDetail = ({receipts}) => {
    const {obdNo}=useParams();
    // Find the goods using the order number
  const receipt = receipts.find(r => r.obdNo === obdNo);

  if (!receipt) {
    return <div>goods receipt detail not found.</div>;
  }

  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-header bg-secondary text-white">
          <h4 className="mb-0">Goods Receipt Summary</h4>
          <button className="btn btn-primary float-end">Back to Index</button>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <h5 className="text-primary">Goods Receipt Details:</h5>
              <div className="mb-2">
                <strong>Quotation No:</strong>
                <input
                  type="text"
                  className="form-control"
                  value={receipt.quotationNo}
                  readOnly
                />
              </div>
              <div className="mb-2">
                <strong>OBD No:</strong>
                <input
                  type="text"
                  className="form-control"
                  value={receipt.obdNo}
                  readOnly
                />
              </div>
              <div className="mb-2">
                <strong>Delivered Date:</strong>
                <input
                  type="text"
                  className="form-control"
                  value={receipt.deliveryDate}
                  readOnly
                />
              </div>
            </div>
            <div className="col-md-6">
              <h5 className="text-primary">Product Summary:</h5>
              <div className=" border rounded p-2">
                <div className="d-flex justify-content-between">
                  <span>{receipt.productNumber}</span>
                  <span>Quantity: {receipt.quantity}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodsReceiptDetail;
