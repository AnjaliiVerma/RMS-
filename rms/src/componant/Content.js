import React from "react";
import Dashboard from "./Dashboard";
import ProductOverview from "./MasterData/ProductOverview";
import {  Route, Routes } from 'react-router-dom';
import AdminUserManagement from "./UserMaster/AdminUserManagement";
import StoreOverview  from "./MasterData/StoreOverview";
import InventoryUpdateQuery from "./InventoryUpdate/InventoryUpdateQuery";
import ConsumptionEntry from "./InventoryUpdate/ConsumptionEntry";
import Inquiryorder from "./NewRequest/Inquiryorder";
import RoleAuthentication from "./RoleAuthentication";
import Quotationoverview from "./NewRequest/Quotationoverview";
import GoodsReceiptOverview from "./NewRequest/GoodsReceiptOverview";
import Invoiceoverview from "./NewRequest/Invoiceoverview"
import ProductDetail from "./MasterData/ProductDetail";
import QuotationDetail from "./NewRequest/QuotationDetail";
import GoodsReceiptDetail from "./NewRequest/GoodsReceiptDetail";
import InvoiceDetail from "./NewRequest/InvoiceDetail";

const Content = ({ isCollapsed, products, quotations, receipts, invoices }) => {
  
  return (
    <div
      className={`content p-4 ${isCollapsed ? "content-collapsed" : ""}`}
      style={{ width: "100%", marginTop: "50px" }}
    >
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/product' element={<ProductOverview products={products}/>}/>
        <Route path="/product/details/:productNumber" element={<ProductDetail products={products}/>} />
        <Route path="/admin-user-management" element={<AdminUserManagement />} />
        <Route path='/store' element={<StoreOverview/>}/>
        <Route path='/inventory' element={<InventoryUpdateQuery/>}/>
        <Route path='/consumption' element={<ConsumptionEntry/>}/>
        <Route path='/inquiry' element={<Inquiryorder/>}/>
        <Route path='/role' element={<RoleAuthentication/>}/>
        <Route path='/approval' element={<Quotationoverview quotations={quotations}/>}/>
        <Route path='/approval/detail/:orderNo' element={<QuotationDetail  quotations={quotations} />}/>
        <Route path='/receipt' element={<GoodsReceiptOverview receipts={receipts}/>}/>
        <Route path='/receipt/detail/:obdNo' element={<GoodsReceiptDetail receipts={receipts}/>}/>
        <Route path='/invoice' element={<Invoiceoverview invoices={invoices}/>}/>
        <Route path='/invoice/detail/:invoiceNo' element={<InvoiceDetail invoices={invoices}/>}/>

      </Routes>
    </div>
  );
};

export default Content;
