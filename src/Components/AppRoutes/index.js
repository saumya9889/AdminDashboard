import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Inventory from "../Pages/Inventory";
import Customers from "../Pages/Customer";
import Orders from "../Pages/Orders";

const AppRoutes = () => {
    return (
        <>
            
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/customers" element={<Customers />} />
                </Routes>
           
        </>
    );
};

export default AppRoutes;