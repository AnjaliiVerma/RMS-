import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { productNumber } = useParams(); // Extract the product number from the URL

  // Find the product using the product number
  const product = products.find((p) => p.productNumber === productNumber);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h4>Product Details</h4>
        </div>
        <div className="card-body">
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label><strong>Product Number</strong></label>
                <input type="text" className="form-control" value={product.productNumber} disabled />
              </div>
              <div className="col-md-6">
                <label><strong>NPC Code</strong></label>
                <input type="text" className="form-control" value={product.npcCode} disabled />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label><strong>Description</strong></label>
                <input type="text" className="form-control" value={product.description} disabled />
              </div>
              <div className="col-md-6">
                <label><strong>Group Description</strong></label>
                <input type="text" className="form-control" value={product.groupDespription} disabled />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label><strong>Category</strong></label>
                <input type="text" className="form-control" value={product.category} disabled />
              </div>
              <div className="col-md-6">
                <label><strong>Product Type</strong></label>
                <input type="text" className="form-control" value={product.productType} disabled />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label><strong>UOM</strong></label>
                <input type="text" className="form-control" value={product.uOM} disabled />
              </div>
              <div className="col-md-6">
                <label><strong>Count</strong></label>
                <input 
                  type="number" 
                  className="form-control" 
                  defaultValue={product.count} 
                  min="1"
                />
              </div>
            </div>
            <div className='text-center mt-5'>
            <Link to="/inquiry" className="btn btn-primary">ADD TO ORDER CART</Link>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
