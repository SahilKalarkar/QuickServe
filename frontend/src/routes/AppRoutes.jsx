import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import CustomerLayout from "../layouts/CustomerLayout";
import ProviderLayout from "../layouts/ProviderLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../pages/public/Home";
import Services from "../pages/public/Services";
import HowItWorks from "../pages/public/HowItWorks";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";
import Unauthorized from "../pages/public/Unauthorized";

import CategoryServices from "../pages/public/CategoryServices";

import ProviderDashboard from "../pages/provider/ProviderDashboard";
import CreateService from "../pages/provider/CreateService";
import MyServices from "../pages/provider/MyServices";

import CustomerDashboard from "../pages/customer/CustomerDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";

import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/services/:slug" element={<CategoryServices />} />
        </Route>

        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Customer Routes */}
        <Route element={<ProtectedRoute allowedRoles={["customer"]} />}>
          <Route element={<CustomerLayout />}>
            <Route path="/customer/dashboard" element={<CustomerDashboard />} />
          </Route>
        </Route>

        {/* Provider Routes */}
        <Route element={<ProtectedRoute allowedRoles={["provider"]} />}>
          <Route element={<ProviderLayout />}>
            <Route path="/provider/dashboard" element={<ProviderDashboard />} />
            <Route path="/provider/services" element={<MyServices />} />
            <Route
              path="/provider/services/create"
              element={<CreateService />}
            />
          </Route>
        </Route>

        {/* Admin Routes */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
