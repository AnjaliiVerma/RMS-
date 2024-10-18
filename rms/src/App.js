import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Sidebar from "./componant/Sidebar";
import Navbar from "./componant/Navbar";
import Content from "./componant/Content";
import { BrowserRouter } from "react-router-dom";
import { productData, quotationData, goodsReceiptData, invoicesDetails} from "./componant/Data";

const App = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1000);

  // Handle window resize
  useEffect(
    () => {
      const handleResize = () => {
        const isMobile = window.innerWidth <= 1000;
        setIsMobileView(isMobile);

        if (isMobile && !isSidebarCollapsed) {
          // Auto-collapse only if transitioning to mobile view
          setSidebarCollapsed(false);
        }
      };

      window.addEventListener("resize", handleResize);

      // Cleanup event listener
      return () => window.removeEventListener("resize", handleResize);
    },
    [isSidebarCollapsed]
  );

  // Handle sidebar toggle
  const handleToggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar toggleSidebar={handleToggleSidebar} />
        <div className="d-flex">
          <Sidebar isCollapsed={isSidebarCollapsed} />
          <Content
            isCollapsed={isSidebarCollapsed}
            products={productData}
            quotations={quotationData}
            receipts={goodsReceiptData}
            invoices={invoicesDetails}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
