import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const ProductOverview = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Filter products based on search term
  const filteredProducts = products.filter(
    product =>
      (product.productNumber &&
        product.productNumber.includes(searchTerm.toLowerCase())) ||
      (product.npcCode &&
        product.npcCode.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (product.description &&
        product.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (product.groupDespription &&
        product.groupDespription
          .toLowerCase()
          .includes(searchTerm.toLowerCase()))
  );

  // Calculate pagination details
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page changes
  const handlePageChange = page => {
    setCurrentPage(page);
  };

  // Handle items per page change
  const handleItemsPerPageChange = e => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page whenever the items per page changes
  };

  //Detail Button Handler
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDetailsClick = product => {
    const productData = products.find(prod => prod.productData === product);
    setSelectedProduct(product);
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h4>Product Overview</h4>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between mb-2">
            <div>
              <label htmlFor="itemsPerPage" className="form-label">
                Show
              </label>
              <select
                id="itemsPerPage"
                className="form-select d-inline mx-2 w-auto"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
              <span>entries per page</span>
            </div>
            <div>
              <input
                type="text"
                className="form-control w-80"
                placeholder="Search..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Product Number</th>
                  <th>NPC Code</th>
                  <th>Product Description</th>
                  <th>Group Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {displayedProducts.map((product, index) =>
                  <tr key={index}>
                    <td>
                      {product.productNumber}
                    </td>
                    <td>
                      {product.npcCode}
                    </td>
                    <td>
                      {product.description}
                    </td>
                    <td>
                      {product.groupDespription}
                    </td>
                    <td>
                      <Link to={`/product/details/${product.productNumber}`}>
                        <button className="btn btn-primary btn-sm">
                          Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                )}
                {displayedProducts.length === 0 &&
                  <tr>
                    <td colSpan="5" className="text-center">
                      No matching records found.
                    </td>
                  </tr>}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              Page {currentPage} of {totalPages}
            </div>
            <div>
              <nav>
                <ul className="pagination">
                  {[...Array(totalPages)].map((_, index) =>
                    <li
                      key={index}
                      className={`page-item ${currentPage === index + 1
                        ? "active"
                        : ""}`}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      <button className="page-link">
                        {index + 1}
                      </button>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
