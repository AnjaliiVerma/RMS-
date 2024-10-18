import React,{useState} from 'react'
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const initialData = [
    {
      productNo: "1000014",
      npcCode: "115BENC001",
      description: "10X EZ PREP SOLUTION, 2L",
      productType: "ZLAB",
      status: "Approved",
    },
    {
      productNo: "1000013",
      npcCode: "110CDYN009",
      description: "10ENZYMATIC CLEANER",
      productType: "ZLAB",
      status: "Rejected",
    },
    {
      productNo: "1000012",
      npcCode: "100ARCH001",
      description: "1 ML SYRINGE (4/PKG)",
      productType: "ZMCO",
      status: "Approved",
    },
    {
      productNo: "1000011",
      npcCode: "125NNNN440",
      description: "0.45% SALINE SOLUTION",
      productType: "ZMED",
      status: "Pending",
    },
    {
      productNo: "1000010",
      npcCode: "125NNNN441",
      description: "0.45% SALINE BAG (ON-BOARD Instruments)",
      productType: "ZMED",
      status: "Approved",
    },
  ];

const Dashboard = () => {

    const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(initialData);

  const cardData = [
    {
      title: "Completed Order",
      subtitle: "",
      count: 264,
      icon: "bi bi-bag-check-fill text-success",
      bgColor: "bg-success-subtle",
      
    },
    {
      title: "Order In Transit",
      subtitle: "",
      count: 90,
      icon: "bi bi-box-seam text-primary",
      bgColor: "bg-primary-subtle",
    },
    {
      title: "Quotation Pending",
      subtitle: "",
      count: 65,
      icon: "bi bi-clock-fill text-danger",
      bgColor: "bg-warning-subtle",
    },
    {
      title: "Critical Stock Level",
      subtitle: "",
      count: 20,
      icon: "bi bi-exclamation-triangle-fill text-danger",
      bgColor: "bg-danger-subtle",
    },
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = initialData.filter(
      (item) =>
        item.productNo.toLowerCase().includes(value) ||
        item.npcCode.toLowerCase().includes(value) ||
        item.description.toLowerCase().includes(value) ||
        item.productType.toLowerCase().includes(value) ||
        item.status.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };
  return (
    <div className="container mt-4">
    <div className="row">
      {cardData.map((card, index) => (
        <div className="col-lg-3 col-md-3 col-sm-6 mb-4" key={index}>
          <div
            className="card shadow-sm border-0"
            style={{ borderRadius: "10px" }}
          >
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="card-title">
                    {card.title} <br />
                    <small className="text-muted ">{card.subtitle}</small>
                  </h6>
                  <h2 className= "fw-bold">{card.count}</h2>
                </div>
                <div
                  className={`rounded-circle d-flex justify-content-center align-items-center ${card.bgColor}`}
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                >
                  <i className={`${card.icon} fs-4 `}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="table-data">
      <div className="card w-100">
        <div className="card-body">
          <h4 className="card-title">Recent Sales Order</h4>

          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="d-flex align-items-center">
              <label for="entriesSelect" class="me-2">
                Show
              </label>
              <select
                id="entriesSelect"
                class="form-select form-select-sm"
                style={{ width: "auto" }}
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
              <span class="ms-2">entries per page</span>
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ width: "90%" }}
              />
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive overflowX-auto">
            <table className="table table-hover table-bordered w-100">
              <thead>
                <tr>
                  <th>Product No</th>
                  <th>NPC Code</th>
                  <th>Product Description</th>
                  <th>Product Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.productNo}</td>
                      <td>{item.npcCode}</td>
                      <td>
                        <a>{item.description}</a>
                      </td>
                      <td>{item.productType}</td>
                      <td>
                        {item.status === "Approved" && (
                          <span className="badge bg-success">
                            {item.status}
                          </span>
                        )}
                        {item.status === "Rejected" && (
                          <span className="badge bg-danger">
                            {item.status}
                          </span>
                        )}
                        {item.status === "Pending" && (
                          <span className="badge bg-warning text-dark">
                            {item.status}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No matching records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <div class="d-flex justify-content-between">
              <span>Showing 1 to 5 of 5 entries</span>
              <nav>
                <ul class="pagination pagination-sm mb-0">
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dashboard

