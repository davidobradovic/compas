import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SidebarComponent from '../components/sidebar/SidebarComponent';
import Tables from '../pages/Tables';
import Products from '../pages/Products';
import CreateProduct from '../pages/products/CreateProduct';
import Supplies from '../pages/Supplies';
import Orders from '../pages/Orders';
import Analyses from '../pages/Analyses';
import NotFound from './NotFound'
import VPActions from '../pages/vpactions/VPActions';
import ProductPage from '../pages/products/ProductPage';
import OrderPage from '../pages/orders/OrderPage';
import MPOrderPage from '../pages/orders/MPOrderPage';
import Settings from '../pages/Settings';

function DashboardRouter() {
  return (
    <SidebarComponent>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/products/*' element={<ProductsRouter />} />
        <Route path='/tables' element={<Tables />} />
        <Route path='/supplies' element={<Supplies />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/analyses' element={<Analyses />} />
        <Route path='/vp-actions' element={<VPActionsRouter />} />
        <Route path='/product/:productId' element={<ProductPage />} />
        <Route path='/order/:orderId' element={<OrderPage />} />
        <Route path='/mp-order/:orderId' element={<MPOrderPage />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </SidebarComponent>
  );
}

export default DashboardRouter;

function ProductsRouter() {
  return (
    <Routes>
      <Route path='/' element={<Products />} />
      <Route path='/create' element={<CreateProduct />} />
    </Routes>
  );
}

function VPActionsRouter () {
  return (
    <Routes>
      <Route path='/' element={<VPActions />} />
      <Route path='/create' element={<CreateProduct />} />
    </Routes>
  )
}
