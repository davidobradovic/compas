import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SidebarComponent from '../components/sidebar/SidebarComponent';

// Stranice
import Tables from '../pages/Tables';
import Products from '../pages/Products';
import Supplies from '../pages/tables/Supplies';
import Orders from '../pages/Orders';
import Analyses from '../pages/Analyses';
import NotFound from './NotFound'
import VPActions from '../pages/vpactions/VPActions';
import ProductPage from '../pages/products/ProductPage';
import OrderPage from '../pages/orders/OrderPage';
import MPOrderPage from '../pages/orders/MPOrderPage';
import Settings from '../pages/Settings';
import TopData from '../pages/tables/TopData';
import DailyOverview from '../pages/tables/DailyOverview';
import ProductActions from '../pages/vpactions/ProductActions';
import SuppliesActions from '../pages/vpactions/SuppliesActions';
import OnlineShop from '../pages/OnlineShop';
import StockActions from '../pages/vpactions/StockActions';
import VPInvoices from '../pages/vpactions/VPInvoices';
import ComplaintsActions from '../pages/vpactions/ComplaintsActions';
import WarrantyActions from '../pages/vpactions/WarrantyActions';
import RequestForAnalyses from '../pages/vpactions/RequestForAnalyses';
import RequestForTable from '../pages/vpactions/RequestForTable';
import MPInvoices from '../pages/vpactions/MPInvoices';
import FiscalCashRegister from '../pages/FiscalCashRegister';
import FiscalCashRegiserPage from '../pages/fiscalCR/FiscalCashRegiserPage';
import { useAppData } from '../provider/AppProvider';
import OrdersPage from '../pages/vpactions/OrdersPage';

function DashboardRouter() {

  const { userType } = useAppData();

  return (
    <SidebarComponent>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/products/*' element={<ProductsRouter />} />
        <Route path='/tables/*' element={<TablesRouter />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/analyses' element={<Analyses />} />
        <Route path='/vp-actions/*' element={<VPActionsRouter />} />
        <Route path='/product/:productId' element={<ProductPage />} />
        <Route path='/order/:orderId' element={<OrderPage />} />
        <Route path='/mp-order/:orderId' element={<MPOrderPage />} />
        <Route path='/online-shop' element={<OnlineShop />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/fiscal-cash-register' element={<FiscalCashRegister />} />
        <Route path='/fiscal-cash-regiser/:fcrId' element={<FiscalCashRegiserPage />} />
      </Routes>
    </SidebarComponent>
  );
}

export default DashboardRouter;

function ProductsRouter() {
  return (
    <Routes>
      <Route path='/' element={<Products />} />
    </Routes>
  );
}

function TablesRouter() {
  return (
    <Routes>
      <Route path='/' element={<Tables />} />
      <Route path='/top-data' element={<TopData />} />
      <Route path='/vp-supplies' element={<Supplies />} />
      <Route path='/daily-overview' element={<DailyOverview />} />
    </Routes>
  );
}

function VPActionsRouter() {
  return (
    <Routes>
      <Route path='/' element={<VPActions />} />
      <Route path='/product-actions' element={<ProductActions />} />
      <Route path='/supplies-actions' element={<SuppliesActions />} />
      <Route path='/stocks-actions' element={<StockActions />} />
      <Route path='/vp-invoices' element={<VPInvoices />} />
      <Route path='/complaints-actions' element={<ComplaintsActions />} />
      <Route path='/warranty-actions' element={<WarrantyActions />} />
      <Route path='/request-for-analyses' element={<RequestForAnalyses />} />
      <Route path='/request-for-table' element={<RequestForTable />} />
      <Route path='/mp-invoices' element={<MPInvoices />} />
      <Route path='/orders-actions' element={<OrdersPage />} /> 
    </Routes>
  )
}
